
export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    featured?: boolean;
    rating: number;
    reviews: number;
    inventory: number;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      category: "clothing",
      image: "/placeholder.svg",
      description: "Essential cotton t-shirt with a relaxed fit and premium fabric.",
      featured: true,
      rating: 4.8,
      reviews: 124,
      inventory: 50
    },
    {
      id: "2",
      name: "Slim Fit Denim Jeans",
      price: 79.99,
      category: "clothing",
      image: "/placeholder.svg",
      description: "Modern slim fit jeans in premium stretch denim for all-day comfort.",
      featured: true,
      rating: 4.6,
      reviews: 98,
      inventory: 35
    },
    {
      id: "3",
      name: "Leather Weekend Backpack",
      price: 119.99,
      category: "accessories",
      image: "/placeholder.svg",
      description: "Handcrafted from premium leather with multiple compartments and laptop sleeve.",
      featured: true,
      rating: 4.9,
      reviews: 78,
      inventory: 20
    },
    {
      id: "4",
      name: "Minimalist Watch",
      price: 149.99,
      category: "accessories",
      image: "/placeholder.svg",
      description: "Clean design with a stainless steel case, Japanese movement, and leather strap.",
      rating: 4.7,
      reviews: 65,
      inventory: 15
    },
    {
      id: "5",
      name: "Wool Blend Overcoat",
      price: 229.99,
      category: "clothing",
      image: "/placeholder.svg",
      description: "Timeless silhouette crafted from a premium wool blend for cold-weather elegance.",
      rating: 4.8,
      reviews: 42,
      inventory: 25
    },
    {
      id: "6",
      name: "Cotton Oxford Shirt",
      price: 59.99,
      category: "clothing",
      image: "/placeholder.svg", 
      description: "Classic button-down oxford with a tailored fit in breathable cotton.",
      rating: 4.5,
      reviews: 87,
      inventory: 40
    },
    {
      id: "7",
      name: "Leather Card Holder",
      price: 39.99,
      category: "accessories",
      image: "/placeholder.svg",
      description: "Slim profile card holder in vegetable-tanned leather with 6 card slots.",
      rating: 4.6,
      reviews: 56,
      inventory: 30
    },
    {
      id: "8",
      name: "Merino Wool Sweater",
      price: 89.99,
      category: "clothing",
      image: "/placeholder.svg",
      description: "Luxurious merino wool sweater with ribbed collar, cuffs, and hem.",
      rating: 4.7,
      reviews: 62,
      inventory: 28
    }
  ];
  
  export const categories = [
    { id: "clothing", name: "Clothing", count: 5 },
    { id: "accessories", name: "Accessories", count: 3 },
  ];