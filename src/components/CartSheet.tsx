import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useShop } from "@/contexts/ShopContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useShop();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-2xl font-display text-primary">
            <ShoppingBag className="h-6 w-6" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add some items to get started</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-2xl p-4 border-2 border-primary/20 shadow-md"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                        <p className="text-primary font-display text-lg">{item.price}</p>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0 rounded-full ml-auto text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 border-primary/20 pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary font-display text-2xl">
                    ৳ {getCartTotal().toFixed(2)}
                  </span>
                </div>
                <Link to="/checkout" onClick={() => onOpenChange(false)}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-lg font-bold py-6 hover:opacity-90">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
