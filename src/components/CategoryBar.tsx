import { Link } from "react-router-dom";

const categories = [
  { slug: "paints", name: "Paints" },
  { slug: "brushes", name: "Brushes" },
  { slug: "canvases", name: "Canvases" },
  { slug: "palettes", name: "Colour Palettes" },
  { slug: "easels", name: "Easels" },
  { slug: "medium", name: "Medium & Varnish" },
  { slug: "decoupage", name: "Decoupage Paper" },
  { slug: "stencil", name: "Stencil" },
  { slug: "lippan", name: "Lippan Art" },
  { slug: "paper", name: "Art Pads & Paper" },
];

export const CategoryBar = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-2xl p-4 md:p-6 border border-border/50">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium bg-background/60 hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-200 hover:shadow-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
