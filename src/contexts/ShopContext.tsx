import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  favorites: Product[];
  searchQuery: string;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (product: Product) => void;
  setSearchQuery: (query: string) => void;
  isInCart: (productId: string) => boolean;
  isFavorite: (productId: string) => boolean;
  getCartTotal: () => number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInCart = (productId: string) => {
    return cart.some((item) => item.id === productId);
  };

  const isFavorite = (productId: string) => {
    return favorites.some((item) => item.id === productId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('৳ ', ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        searchQuery,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        setSearchQuery,
        isInCart,
        isFavorite,
        getCartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
};
