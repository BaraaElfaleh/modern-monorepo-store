// context.tsx
import { createContext, useContext, useState,type ReactNode } from 'react';
import type { Wishlist, WishlistItem } from './entities/entity';
import * as wishlistService from './services/service';

interface WishlistContextType {
  wishlist: Wishlist;
  addItem: (item: WishlistItem) => void;
  removeItem: (productId: number) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Wishlist>(wishlistService.clearWishlist());

  const addItem = (item: WishlistItem) =>
    setWishlist(prev => wishlistService.addItem(prev, item));

  const removeItem = (productId: number) =>
    setWishlist(prev => wishlistService.removeItem(prev, productId));

  const clearWishlist = () => setWishlist(wishlistService.clearWishlist());

  const isInWishlist = (productId: number) =>
    wishlistService.isInWishlist(wishlist, productId);

  return (
    <WishlistContext.Provider value={{ wishlist, addItem, removeItem, clearWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlistContext = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlistContext must be used inside WishlistProvider');
  return ctx;
};