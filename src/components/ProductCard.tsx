
import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-medium">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1">
              <div className="text-amber-500">★</div>
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <Button 
          size="icon"
          className="rounded-full bg-navy-800 hover:bg-navy-700 shadow-md"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
        >
          <ShoppingBag size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;