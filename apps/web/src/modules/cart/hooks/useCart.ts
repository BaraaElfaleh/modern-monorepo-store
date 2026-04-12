// hooks/useCart.ts
import { useCartContext } from '../context';
import { adaptCartItem } from '../adapters/adapter';
import type { AddToCartDto } from '../dto/dto';

export const useCart = () => {
  const { cart, addItem, removeItem, updateItem, clearCart } = useCartContext();

  const handleAdd = (
    product: { id: number; title: string; price: number; thumbnail: string },
    dto: AddToCartDto
  ) => {
    const item = adaptCartItem(product, dto.quantity);
    addItem(item);
  };

  return {
    cart,
    addItem: handleAdd,
    removeItem,
    updateItem,
    clearCart,
  };
};