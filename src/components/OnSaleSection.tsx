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
    <section className="py-8 md:py-12 relative">
      {/* Subtle decorative border */}
      <div className="container mx-auto px-3 md:px-4">
        <div className="relative glass-card rounded-3xl p-6 md:p-8 border-2 border-primary/20">
          {/* Corner ribbon */}
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 z-20">
            <div className="bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-2.5 rounded-2xl shadow-lg flex items-center gap-2 font-semibold text-sm md:text-base">
              <Tag className="h-4 w-4 md:h-5 md:w-5" />
              <span>Sale</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 md:mb-8 pt-4">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              Special Offers
            </h2>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Limited time savings on your favorites</span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {products.map((product, index) => (
              <div key={product.id || index} className="relative group">
                {/* Simple sale indicator */}
                <div className="absolute top-2 right-2 z-20">
                  <div className="bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full text-xs font-medium shadow-sm">
                    Sale
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
          
          {/* Subtle bottom accent */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
