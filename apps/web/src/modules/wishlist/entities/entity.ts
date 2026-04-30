// entities/entity.ts
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
}
