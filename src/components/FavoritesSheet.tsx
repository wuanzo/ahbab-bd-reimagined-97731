import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useShop } from "@/contexts/ShopContext";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface FavoritesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FavoritesSheet = ({ open, onOpenChange }: FavoritesSheetProps) => {
  const { favorites, toggleFavorite, addToCart } = useShop();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-2xl font-display text-primary">
            <Heart className="h-6 w-6 fill-primary" />
            Your Favorites
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No favorites yet</p>
              <p className="text-sm text-muted-foreground mt-2">Save items you love</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 border-2 border-primary/20 shadow-md"
                >
                  <div className="flex gap-3">
                    <Link to={`/product/${item.id}`} onClick={() => onOpenChange(false)}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer"
                      />
                    </Link>
                    <div className="flex-1 space-y-2">
                      <Link to={`/product/${item.id}`} onClick={() => onOpenChange(false)}>
                        <h4 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                          {item.name}
                        </h4>
                      </Link>
                      <p className="text-primary font-display text-lg">{item.price}</p>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 rounded-full bg-gradient-to-r from-primary to-accent"
                          onClick={() => {
                            addToCart(item);
                            onOpenChange(false);
                          }}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full text-destructive"
                          onClick={() => toggleFavorite(item)}
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
