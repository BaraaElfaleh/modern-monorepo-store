export interface WishlistItem {
  id: string | number;
  name?: string;
  title?: string;
  price: number;
  imageUrl?: string;
  thumbnail?: string;
  description?: string;
  category?: string;
  productId?: string | number;
}

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
}
