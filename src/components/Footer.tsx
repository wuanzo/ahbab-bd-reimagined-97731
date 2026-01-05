import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 border-t-2 border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 max-w-sm">
            <Logo />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Your one-stop destination for premium stationery supplies. Quality products for creative minds.
            </p>
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
