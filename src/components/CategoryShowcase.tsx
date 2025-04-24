
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryShowcaseProps {
  categories: Category[];
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="aspect-[16/9] bg-muted">
                <img 
                  src="/placeholder.svg" 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.count} products</p>
                <Button 
                  variant="secondary" 
                  className="w-fit"
                  asChild
                >
                  <Link to={`/category/${category.id}`}>Browse {category.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;