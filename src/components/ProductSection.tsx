import { ProductCard } from "./ProductCard";
import { Sparkles } from "lucide-react";

interface Product {
  id?: string;
  name: string;
  image: string;
  price?: string;
  category?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  emoji?: string;
}

export const ProductSection = ({ title, products, emoji = "✨" }: ProductSectionProps) => {
  return (
    <section className="py-4 md:py-8">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <span className="text-2xl md:text-4xl">{emoji}</span>
        <h2 className="text-2xl md:text-3xl font-display text-primary">{title}</h2>
        <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent animate-pulse" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
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
    </section>
  );
};
