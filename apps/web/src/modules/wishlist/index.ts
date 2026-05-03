// index.ts
export { WishlistProvider, useWishlistContext } from './context';
export { useWishlist } from './hooks/useWishlist';
export { WishlistPage } from './views/Wishlistpage';
export type { Wishlist, WishlistItem as WishlistItemType } from './entities/entity';
// سطر 6
export type AddToWishlistDto = any;
export type RemoveFromWishlistDto = any;