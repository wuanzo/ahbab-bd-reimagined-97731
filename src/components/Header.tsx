import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useShop } from "@/contexts/ShopContext";
import { CartSheet } from "./CartSheet";
import { FavoritesSheet } from "./FavoritesSheet";
import { Logo } from "./Logo";
import { useState } from "react";

export const Header = () => {
  const { cart, favorites, searchQuery, setSearchQuery } = useShop();
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <>
    <header className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-b-2 border-border sticky top-0 z-50 shadow-md backdrop-blur-sm bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <h1 className="text-xl font-display text-primary">Stationery Parlour</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="search"
              placeholder="Search for supplies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-2 border-border rounded-full focus:border-primary shadow-sm"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setFavoritesOpen(true)}
              className="p-2 md:p-3 hover:bg-primary/10 rounded-full transition-all hover:scale-110 relative"
            >
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-md">
                  {favorites.length}
                </span>
              )}
            </button>
            <button className="p-2 md:p-3 hover:bg-secondary/20 rounded-full transition-all hover:scale-110">
              <User className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
            </button>
            <button 
              onClick={() => setCartOpen(true)}
              className="p-2 md:p-3 hover:bg-accent/20 rounded-full transition-all hover:scale-110 relative"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-md">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      <FavoritesSheet open={favoritesOpen} onOpenChange={setFavoritesOpen} />
    </header>
    </>
  );
};
