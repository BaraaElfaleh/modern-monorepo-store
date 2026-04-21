import { createContext, useContext, useState } from "react";

export interface WishlistItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating?: number;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addItem = (item: WishlistItem) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeItem = (id: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const clearWishlist = () => setWishlist([]);

  const isInWishlist = (id: number) =>
    wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addItem, removeItem, clearWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlistContext = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("WishlistProvider missing");
  return ctx;
};