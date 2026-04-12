import type { CartItem } from '../entities/entity';

export const adaptCartItem = (product: {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}, quantity: number): CartItem => ({
  productId: product.id,
  title: product.title,
  price: product.price,
  thumbnail: product.thumbnail,
  quantity,
  total: product.price * quantity,
});