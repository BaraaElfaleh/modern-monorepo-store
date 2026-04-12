// services/service.ts
import type { Cart, CartItem } from '../entities/entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AddToCartDto, UpdateCartItemDto } from '../dto/dto';

export const addItem = (cart: Cart, item: CartItem): Cart => {
  const exists = cart.items.find(i => i.productId === item.productId);

  const items = exists
    ? cart.items.map(i =>
        i.productId === item.productId
          ? { ...i, quantity: i.quantity + item.quantity, total: i.price * (i.quantity + item.quantity) }
          : i
      )
    : [...cart.items, item];

  return recalculate(items);
};

export const removeItem = (cart: Cart, productId: number): Cart => {
  const items = cart.items.filter(i => i.productId !== productId);
  return recalculate(items);
};

export const updateItem = (cart: Cart, dto: UpdateCartItemDto): Cart => {
  const items = cart.items.map(i =>
    i.productId === dto.productId
      ? { ...i, quantity: dto.quantity, total: i.price * dto.quantity }
      : i
  );
  return recalculate(items);
};

export const clearCart = (): Cart => ({
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
});

const recalculate = (items: CartItem[]): Cart => ({
  items,
  totalQuantity: items.reduce((acc, i) => acc + i.quantity, 0),
  totalPrice: items.reduce((acc, i) => acc + i.total, 0),
});