
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">STELLAR</h3>
            <p className="text-sm text-muted-foreground">
              Premium clothing and accessories for the modern individual.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground">All Products</Link>
              </li>
              <li>
                <Link to="/category/clothing" className="text-muted-foreground hover:text-foreground">Clothing</Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t text-sm text-muted-foreground">
          <p>&copy; {currentYear} STELLAR. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed and built with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;