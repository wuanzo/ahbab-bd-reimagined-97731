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
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{emoji}</span>
        <h2 className="text-3xl font-display text-primary">{title}</h2>
        <Sparkles className="h-6 w-6 text-accent animate-pulse" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
