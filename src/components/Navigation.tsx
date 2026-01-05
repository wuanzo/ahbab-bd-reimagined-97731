import { Home, Award, Info, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "All Brands", href: "/brands", icon: Award },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Weekly Features", href: "/weekly-features", icon: Sparkles },
];

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="glass-nav shadow-lg">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-center gap-1 sm:gap-2 py-2 md:py-3 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-1.5 md:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-2.5 font-semibold rounded-full text-xs sm:text-sm md:text-base transition-all hover:scale-105 whitespace-nowrap flex-shrink-0 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
