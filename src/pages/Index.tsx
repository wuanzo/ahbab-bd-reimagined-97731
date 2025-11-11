import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { CategoryBar } from "@/components/CategoryBar";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Footer } from "@/components/Footer";
import { useShop } from "@/contexts/ShopContext";

const paintProducts = [
  { id: "paint-1", name: "Acrylic Paint Set - 24 Colors", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", price: "৳ 599", category: "paints" },
  { id: "paint-2", name: "Watercolor Paint Set", image: "https://images.unsplash.com/photo-1572372578149-c6b0c10f6697?w=400&h=400&fit=crop", price: "৳ 449", category: "paints" },
  { id: "paint-3", name: "Oil Paint Set - Professional", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop", price: "৳ 799", category: "paints" },
  { id: "paint-4", name: "Tempera Paint Set", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop", price: "৳ 399", category: "paints" },
  { id: "paint-5", name: "Gouache Paint Set", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=400&fit=crop", price: "৳ 699", category: "paints" },
];

const brushProducts = [
  { id: "brush-1", name: "Round Brush Set - 12 Pieces", image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400&h=400&fit=crop", price: "৳ 299", category: "brushes" },
  { id: "brush-2", name: "Flat Brush Set", image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=400&fit=crop", price: "৳ 349", category: "brushes" },
  { id: "brush-3", name: "Fan Brush Collection", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop", price: "৳ 249", category: "brushes" },
  { id: "brush-4", name: "Detail Brush Set", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=400&fit=crop", price: "৳ 399", category: "brushes" },
  { id: "brush-5", name: "Professional Brush Kit", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=400&fit=crop", price: "৳ 899", category: "brushes" },
];

const canvasProducts = [
  { id: "canvas-1", name: "Canvas Board 12x16 inches", image: "https://images.unsplash.com/photo-1615887142175-e0e9e86209be?w=400&h=400&fit=crop", price: "৳ 199", category: "canvases" },
  { id: "canvas-2", name: "Stretched Canvas 18x24", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop", price: "৳ 349", category: "canvases" },
  { id: "canvas-3", name: "Canvas Panel Set - 5 Pack", image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=400&fit=crop", price: "৳ 449", category: "canvases" },
  { id: "canvas-4", name: "Large Canvas 24x36", image: "https://images.unsplash.com/photo-1571643308907-e9e4c2f4e5cd?w=400&h=400&fit=crop", price: "৳ 599", category: "canvases" },
  { id: "canvas-5", name: "Mini Canvas Set - 10 Pack", image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=400&h=400&fit=crop", price: "৳ 299", category: "canvases" },
];

const paletteProducts = [
  { id: "palette-1", name: "Wooden Palette - Large", image: "https://images.unsplash.com/photo-1572372578149-c6b0c10f6697?w=400&h=400&fit=crop", price: "৳ 249", category: "palettes" },
  { id: "palette-2", name: "Plastic Palette Set", image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=400&fit=crop", price: "৳ 149", category: "palettes" },
  { id: "palette-3", name: "Glass Palette Premium", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop", price: "৳ 399", category: "palettes" },
  { id: "palette-4", name: "Mixing Palette with Wells", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", price: "৳ 199", category: "palettes" },
  { id: "palette-5", name: "Disposable Palette Pad", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop", price: "৳ 179", category: "palettes" },
];

import { useState, useEffect, useMemo } from "react";

import { CottonCandySpinner } from "@/components/CottonCandySpinner";

const Index = () => {
  const { searchQuery } = useShop();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredPaintProducts = useMemo(() => 
    paintProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const filteredBrushProducts = useMemo(() => 
    brushProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const filteredCanvasProducts = useMemo(() => 
    canvasProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const filteredPaletteProducts = useMemo(() => 
    paletteProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryBar />
      
      <div className="container mx-auto px-4 py-8">
        <main className="space-y-12">
          {loading ? (
            <>
              <div className="flex justify-center items-center py-20">
                <div className="text-center space-y-4">
                  <CottonCandySpinner />
                  <p className="text-primary font-display text-xl">Loading magical items...</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {searchQuery && (
                <div className="text-center mb-4">
                  <p className="text-lg text-muted-foreground">
                    Searching for: <span className="font-bold text-primary">{searchQuery}</span>
                  </p>
                </div>
              )}
              {filteredPaintProducts.length > 0 && (
                <ProductSection title="Paints" products={filteredPaintProducts} />
              )}
              {filteredBrushProducts.length > 0 && (
                <ProductSection title="Brushes" products={filteredBrushProducts} />
              )}
              {filteredCanvasProducts.length > 0 && (
                <ProductSection title="Canvases" products={filteredCanvasProducts} />
              )}
              {filteredPaletteProducts.length > 0 && (
                <ProductSection title="Colour Palettes" products={filteredPaletteProducts} />
              )}
              {searchQuery && 
                filteredPaintProducts.length === 0 && 
                filteredBrushProducts.length === 0 && 
                filteredCanvasProducts.length === 0 && 
                filteredPaletteProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-2xl text-muted-foreground">No products found</p>
                  <p className="text-sm text-muted-foreground mt-2">Try searching for something else</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
