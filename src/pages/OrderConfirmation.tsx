
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderConfirmation: React.FC = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container max-w-3xl py-12 px-4 md:px-6 flex-grow">
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Thank you for your order!</h1>
            <p className="text-muted-foreground">
              Your order has been confirmed and will be shipped soon.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h2 className="font-medium text-lg mb-4">Order Details</h2>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Order number</span>
              <span className="font-medium">#{orderNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">customer@example.com</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            We've sent a confirmation email with your order details and tracking information.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button className="bg-navy-800 hover:bg-navy-700" size="lg" asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;