
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
          <Link to="/" className="text-xl font-bold tracking-tighter text-navy-800">
            STELLAR
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-navy-800">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-navy-800">
              All Products
            </Link>
            <Link to="/category/clothing" className="text-sm font-medium transition-colors hover:text-navy-800">
              Clothing
            </Link>
            <Link to="/category/accessories" className="text-sm font-medium transition-colors hover:text-navy-800">
              Accessories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCartOpen(true)}
            className="relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-navy-800 rounded-full">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-4 pt-2 border-t">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:text-navy-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium transition-colors hover:text-navy-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link 
              to="/category/clothing" 
              className="text-sm font-medium transition-colors hover:text-navy-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clothing
            </Link>
            <Link 
              to="/category/accessories" 
              className="text-sm font-medium transition-colors hover:text-navy-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accessories
            </Link>
          </nav>
        </div>
      )}
      
      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} setOpen={setIsCartOpen} />
    </header>
  );
};

export default Header;