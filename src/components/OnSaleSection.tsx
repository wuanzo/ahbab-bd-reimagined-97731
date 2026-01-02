import { ProductCard } from "./ProductCard";
import { Tag, Sparkles } from "lucide-react";

interface Product {
  id?: string;
  name: string;
  image: string;
  price?: string;
  originalPrice?: string;
  category?: string;
}

interface OnSaleSectionProps {
  products: Product[];
}

export const OnSaleSection = ({ products }: OnSaleSectionProps) => {
  return (
    <section className="py-10 md:py-16 relative">
      <div className="container mx-auto px-3 md:px-4">
        {/* Outer glow container */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-primary to-purple-300 rounded-[2rem] blur-xl opacity-30 animate-pulse" />
          
          {/* Main container */}
          <div className="relative bg-gradient-to-br from-white/80 via-white/70 to-pink-50/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-white/60 shadow-2xl">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
            
            {/* Header with icon */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <div className="bg-gradient-to-br from-primary to-pink-400 p-2.5 rounded-xl shadow-lg">
                  <Tag className="h-5 w-5 text-white" />
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2 tracking-tight">
                Special Offers
              </h2>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span>Limited time savings on your favorites</span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              </div>
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id || index}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
            
            {/* Bottom decorative element */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-transparent to-primary/40 rounded-full" />
                <div className="h-1.5 w-1.5 bg-primary/50 rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-full" />
                <div className="h-1.5 w-1.5 bg-primary/50 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-l from-transparent to-primary/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
