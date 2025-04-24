
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import ProductGrid from "./ProductGrid";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-muted-foreground mt-2">Our most popular products, handpicked just for you.</p>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center text-navy-800 hover:text-navy-700 font-medium mt-4 md:mt-0"
          >
            View All Products
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
