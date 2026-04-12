// services/service.ts
import type { Wishlist, WishlistItem } from '../entities/entity';

export const addItem = (wishlist: Wishlist, item: WishlistItem): Wishlist => {
  const exists = wishlist.items.find(i => i.productId === item.productId);
  if (exists) return wishlist;

  return {
    items: [...wishlist.items, item],
    totalItems: wishlist.totalItems + 1,
  };
};

export const removeItem = (wishlist: Wishlist, productId: number): Wishlist => {
  const items = wishlist.items.filter(i => i.productId !== productId);
  return { items, totalItems: items.length };
};

export const isInWishlist = (wishlist: Wishlist, productId: number): boolean =>
  wishlist.items.some(i => i.productId === productId);

export const clearWishlist = (): Wishlist => ({
  items: [],
  totalItems: 0,
});