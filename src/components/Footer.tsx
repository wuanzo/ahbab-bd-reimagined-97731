import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 border-t-2 border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Logo />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Your one-stop destination for premium stationery supplies. Quality products for creative minds.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base md:text-lg text-foreground mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link to="/" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-base md:text-lg text-foreground mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Creative Street, Art District, Dhaka 1200</span>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="break-all">hello@stationaryparlour.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-base md:text-lg text-foreground mb-3 md:mb-4">Newsletter</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-xl border-2 flex-1 text-sm"
              />
              <Button className="rounded-xl bg-primary hover:bg-primary/90 whitespace-nowrap text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border">
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stationery Parlour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
