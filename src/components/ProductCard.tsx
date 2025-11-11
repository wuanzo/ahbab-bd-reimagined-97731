import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "@/contexts/ShopContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  price?: string;
  category?: string;
}

export const ProductCard = ({ id = "1", name, image, price = "৳ 299", category = "" }: ProductCardProps) => {
  const { addToCart, toggleFavorite, isFavorite } = useShop();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, image, price, category });
    toast({
      title: "Added to cart! 🛒",
      description: `${name} added successfully! ✨`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite({ id, name, image, price, category });
    toast({
      title: isFavorite(id) ? "Removed from favorites 💔" : "Added to favorites! 💕",
      description: isFavorite(id) ? "Item removed" : `${name} saved! ✨`,
    });
  };

  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary rounded-3xl glass-card">
      <CardContent className="p-0">
        <Link to={`/product/${id}`}>
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <button 
              onClick={handleToggleFavorite}
              className="absolute top-3 right-3 p-2 glass-card rounded-full shadow-lg hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
            >
              <Heart className={`h-5 w-5 ${isFavorite(id) ? "fill-primary text-primary" : "text-primary"}`} />
            </button>
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              NEW ✨
            </div>
          </div>
        </Link>
        <div className="p-4 space-y-3">
          <Link to={`/product/${id}`}>
            <h3 className="font-semibold text-foreground line-clamp-2 min-h-[48px] text-sm hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-display text-primary">{price}</span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="gap-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all font-bold bg-gradient-to-r from-primary to-accent border-0"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
