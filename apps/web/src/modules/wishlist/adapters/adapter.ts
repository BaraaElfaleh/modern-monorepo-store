// adapters/adapter.ts
import type { WishlistItem } from '../entities/entity';

export const adaptWishlistItem = (product: {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}): WishlistItem => ({
  productId: product.id,
  title: product.title,
  price: product.price,
  thumbnail: product.thumbnail,
  rating: product.rating,
});