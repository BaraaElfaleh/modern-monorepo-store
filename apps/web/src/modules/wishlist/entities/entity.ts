// entities/entity.ts
export interface WishlistItem {
  productId: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
}