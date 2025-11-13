import { Link } from "react-router-dom";
import { Palette, Brush, Frame, Layers, Scissors, Grid, Sparkles, FileText, SquareStack, Triangle } from "lucide-react";

const categories = [
  { slug: "paints", name: "PAINTS", icon: Palette },
  { slug: "brushes", name: "BRUSHES", icon: Brush },
  { slug: "canvases", name: "CANVASES", icon: Frame },
  { slug: "palettes", name: "COLOUR PALETTES", icon: Layers },
  { slug: "easels", name: "EASELS", icon: Triangle },
  { slug: "medium", name: "MEDIUM & VARNISH", icon: Sparkles },
  { slug: "decoupage", name: "DECOUPAGE PAPER", icon: Scissors },
  { slug: "stencil", name: "STENCIL", icon: Grid },
  { slug: "lippan", name: "LIPPAN ART", icon: SquareStack },
  { slug: "paper", name: "ART PADS & PAPER", icon: FileText },
];

export const CategoryBar = () => {
  return (
    <section className="py-6 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/category/${category.slug}`}
                className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-2xl glass-card hover:bg-gradient-to-br hover:from-primary/30 hover:to-accent/30 transition-all group shadow-sm hover:shadow-xl hover:scale-105 border-2 border-primary/20 hover:border-primary/50 h-full backdrop-blur-sm"
              >
                <Icon className="h-7 w-7 group-hover:scale-110 transition-transform text-primary" />
                <span className="text-xs font-bold text-center whitespace-nowrap group-hover:text-primary">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
