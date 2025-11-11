import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Palette, Brush, Frame, Layers } from "lucide-react";
import { useState, useEffect } from "react";

const categoryData: Record<string, {
  name: string;
  icon: any;
  subcategories: string[];
  background: string;
  products: any[];
}> = {
  paints: {
    name: "Paints",
    icon: Palette,
    subcategories: ["Acrylic", "Watercolor", "Oil", "Gouache", "Tempera"],
    background: "bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10",
    products: [
      { id: "p1", name: "Acrylic Paint Set - 24 Colors", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 899", category: "paints" },
      { id: "p2", name: "Watercolor Paint Palette", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 699", category: "paints" },
      { id: "p3", name: "Oil Paint Set - Professional", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 1299", category: "paints" },
      { id: "p4", name: "Gouache Paint Collection", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 799", category: "paints" },
    ]
  },
  brushes: {
    name: "Brushes",
    icon: Brush,
    subcategories: ["Round", "Flat", "Fan", "Detail", "Set"],
    background: "bg-gradient-to-br from-muted/20 via-accent/10 to-primary/10",
    products: [
      { id: "b1", name: "Premium Brush Set - 12 Pieces", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 599", category: "brushes" },
      { id: "b2", name: "Detail Brush Collection", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 399", category: "brushes" },
      { id: "b3", name: "Fan Brush Set", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 299", category: "brushes" },
      { id: "b4", name: "Watercolor Brush Kit", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 499", category: "brushes" },
    ]
  },
  canvases: {
    name: "Canvases",
    icon: Frame,
    subcategories: ["Stretched", "Canvas Boards", "Rolls", "Pads", "Panels"],
    background: "bg-gradient-to-br from-secondary/10 via-muted/10 to-accent/10",
    products: [
      { id: "c1", name: "Stretched Canvas - 16x20", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 499", category: "canvases" },
      { id: "c2", name: "Canvas Board Pack - 5pcs", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 399", category: "canvases" },
      { id: "c3", name: "Canvas Roll - 5 meters", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 1199", category: "canvases" },
      { id: "c4", name: "Canvas Pad A4 Size", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 299", category: "canvases" },
    ]
  },
  palettes: {
    name: "Colour Palettes",
    icon: Layers,
    subcategories: ["Plastic", "Wooden", "Ceramic", "Disposable", "Mixing Tray"],
    background: "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10",
    products: [
      { id: "pal1", name: "Wooden Palette - Professional", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 399", category: "palettes" },
      { id: "pal2", name: "Ceramic Mixing Palette", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 299", category: "palettes" },
      { id: "pal3", name: "Plastic Palette Set", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 199", category: "palettes" },
      { id: "pal4", name: "Disposable Palette Sheets", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 149", category: "palettes" },
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  
  const categoryInfo = categoryData[category || ""] || categoryData.paints;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className={`${categoryInfo.background} py-6 md:py-8`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary mb-2 flex items-center justify-center gap-2 sm:gap-3">
              <categoryInfo.icon className="h-10 w-10 md:h-12 md:w-12" />
              {categoryInfo.name}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Discover our collection</p>
          </div>

          {/* Subcategory Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 md:mb-8">
            <button
              onClick={() => setSelectedSubcategory("All")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all ${
                selectedSubcategory === "All"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-primary/10 border-2 border-border"
              }`}
            >
              All
            </button>
            {categoryInfo.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all ${
                  selectedSubcategory === sub
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-primary/10 border-2 border-border"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {loading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            ) : (
              categoryInfo.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
