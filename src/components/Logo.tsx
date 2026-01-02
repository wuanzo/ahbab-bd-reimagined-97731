import { Package } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
        <Package className="h-7 w-7 text-white" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-display text-primary tracking-tight relative overflow-hidden">
          <span className="relative">
            Stationery Parlour
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine" />
          </span>
        </h1>
        <p className="text-xs text-muted-foreground/80 font-medium tracking-wide uppercase">Your Creative Space</p>
      </div>
    </Link>
  );
};
