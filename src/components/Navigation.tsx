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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-6 py-2 font-semibold rounded-full text-foreground hover:glass-card hover:text-primary transition-all hover:scale-105 shadow-md"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
