
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Check if category exists
  const category = categories.find(c => c.id === categoryId);
  
  // Handle invalid category
  if (!category && categoryId !== 'featured') {
    return <Navigate to="/products" replace />;
  }
  
  // Filter products based on category
  const filteredProducts = products.filter(product => {
    if (categoryId === 'featured') {
      return product.featured;
    }
    return product.category === categoryId;
  });
  
  // Title for the page
  const pageTitle = categoryId === 'featured' 
    ? 'Featured Products' 
    : category?.name;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              We couldn't find any products in this category.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;