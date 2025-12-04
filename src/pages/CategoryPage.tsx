import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Palette, Brush, Frame, Layers, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

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

import { CottonCandySpinner } from "@/components/CottonCandySpinner";

// Helper to extract numeric price from string like "৳ 899"
const extractPrice = (priceStr: string): number => {
  const match = priceStr.replace(/[^\d]/g, "");
  return parseInt(match) || 0;
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  
  const categoryInfo = categoryData[category || ""] || categoryData.paints;

  // Calculate min/max prices from products
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = categoryInfo.products.map(p => extractPrice(p.price));
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices)
    };
  }, [categoryInfo.products]);

  // Reset filters when category changes
  useEffect(() => {
    setLoading(true);
    setPriceRange([0, 2000]);
    setSortOrder("default");
    setSelectedSubcategory("All");
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [category]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = [...categoryInfo.products];

    // Filter by price range
    products = products.filter(p => {
      const price = extractPrice(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort by price
    if (sortOrder === "price-asc") {
      products.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
    } else if (sortOrder === "price-desc") {
      products.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
    }

    return products;
  }, [categoryInfo.products, sortOrder, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="py-6 md:py-8">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 md:mb-8 glass-card rounded-3xl p-6 md:p-8 border-2 border-primary/20">
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
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all glass-card ${
                selectedSubcategory === "All"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "hover:bg-primary/10 border-2 border-border"
              }`}
            >
              All
            </button>
            {categoryInfo.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all glass-card ${
                  selectedSubcategory === sub
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-primary/10 border-2 border-border"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Sort & Filter Controls */}
          <div className="glass-card rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-accent/30 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
              {/* Sort By */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <ArrowUpDown className="h-5 w-5" />
                  <span className="font-display text-sm md:text-base whitespace-nowrap">Sort By</span>
                </div>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-[160px] md:w-[180px] glass-card border-2 border-primary/20 rounded-xl focus:ring-primary focus:border-primary bg-background/80">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-2 border-primary/20 rounded-xl bg-background">
                    <SelectItem value="default" className="focus:bg-primary/10 rounded-lg">Default</SelectItem>
                    <SelectItem value="price-asc" className="focus:bg-primary/10 rounded-lg">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc" className="focus:bg-primary/10 rounded-lg">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <SlidersHorizontal className="h-5 w-5" />
                  <span className="font-display text-sm md:text-base whitespace-nowrap">Price Range</span>
                </div>
                
                <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">৳</span>
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Math.max(0, parseInt(e.target.value) || 0), priceRange[1]])}
                      className="w-20 md:w-24 glass-card border-2 border-primary/20 rounded-xl text-center text-sm focus:ring-primary focus:border-primary bg-background/80"
                      min={0}
                      max={priceRange[1]}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-[100px] max-w-[200px] px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      min={0}
                      max={2000}
                      step={50}
                      className="[&_[data-radix-slider-track]]:bg-primary/20 [&_[data-radix-slider-range]]:bg-gradient-to-r [&_[data-radix-slider-range]]:from-primary [&_[data-radix-slider-range]]:to-accent [&_[data-radix-slider-thumb]]:border-primary [&_[data-radix-slider-thumb]]:bg-background [&_[data-radix-slider-thumb]]:shadow-lg"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">৳</span>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Math.max(priceRange[0], parseInt(e.target.value) || 0)])}
                      className="w-20 md:w-24 glass-card border-2 border-primary/20 rounded-xl text-center text-sm focus:ring-primary focus:border-primary bg-background/80"
                      min={priceRange[0]}
                      max={2000}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-primary">{filteredAndSortedProducts.length}</span> of {categoryInfo.products.length} products
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {loading ? (
              <div className="col-span-full flex justify-center py-20">
                <div className="text-center space-y-4">
                  <CottonCandySpinner />
                  <p className="text-primary font-display text-xl">Loading {categoryInfo.name}...</p>
                </div>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <div className="glass-card rounded-2xl p-8 inline-block border-2 border-primary/20">
                  <SlidersHorizontal className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                  <p className="text-lg font-display text-primary mb-2">No products found</p>
                  <p className="text-sm text-muted-foreground">Try adjusting your price filters</p>
                </div>
              </div>
            ) : (
              filteredAndSortedProducts.map((product) => (
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
