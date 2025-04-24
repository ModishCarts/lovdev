
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-navy-900 text-white">
      <div className="container relative px-4 md:px-6 flex flex-col md:flex-row items-center py-12 md:py-24 gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Elevate Your Style with Premium Essentials
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            Discover our curated collection of timeless pieces crafted with premium materials and impeccable attention to detail.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-white text-navy-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/products">Shop Collection</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/category/featured">Featured Items</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] md:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/50" />
            <img
              src="/placeholder.svg"
              alt="Fashion collection"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;