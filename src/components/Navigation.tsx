import { Home, Award, Info, Gift } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "All Brands", href: "/brands", icon: Award },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Combo Deals", href: "/combos", icon: Gift },
];

export const Navigation = () => {
  return (
    <nav className="glass-nav shadow-lg">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 font-semibold rounded-full text-xs md:text-base text-foreground hover:glass-card hover:text-primary transition-all hover:scale-105 shadow-md whitespace-nowrap flex-shrink-0"
            >
              <item.icon className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
