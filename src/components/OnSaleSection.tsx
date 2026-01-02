import { ProductCard } from "./ProductCard";
import { Sparkles, Flame, Percent } from "lucide-react";

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
    <section className="py-6 md:py-10 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 via-purple-300/50 to-pink-200/40 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-300/30 to-purple-400/30 blur-2xl" />
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-300/30 to-pink-400/30 blur-2xl" />
      </div>
      
      {/* Floating sale tags */}
      <div className="absolute top-6 right-12 md:top-10 md:right-20 animate-bounce">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
          -30%
        </div>
      </div>
      <div className="absolute top-16 left-8 md:top-20 md:left-16 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
          -25%
        </div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        {/* Header with special styling */}
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <Flame className="h-6 w-6 md:h-8 md:w-8 text-pink-500 animate-pulse" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                On Sale
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-lg -z-10" />
            </div>
            <Flame className="h-6 w-6 md:h-8 md:w-8 text-purple-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Limited time offers - Grab them before they're gone!</span>
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
        </div>
        
        {/* Products grid with special card styling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {products.map((product, index) => (
            <div key={product.id || index} className="relative group">
              {/* Sale badge overlay */}
              <div className="absolute -top-2 -right-2 z-20">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Percent className="h-3 w-3" />
                  SALE
                </div>
              </div>
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
