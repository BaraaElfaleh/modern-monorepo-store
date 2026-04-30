import type { Cart, CartItem } from '../entities/entity'; 
import type { UpdateCartItemDto } from '../dto/dto';

export const addItem = (cart: Cart, newItem: CartItem): Cart => {
  const existingItemIndex = cart.items.findIndex(item => item.productId === newItem.productId);
  let updatedItems = [...cart.items];

  if (existingItemIndex !== -1) {
    const existingItem = updatedItems[existingItemIndex];
    const newQuantity = existingItem.quantity + newItem.quantity;
    updatedItems[existingItemIndex] = {
      ...existingItem,
      quantity: newQuantity,
      total: newQuantity * existingItem.price
    };
  } else {
    updatedItems.push({
      ...newItem,
      total: newItem.price * newItem.quantity
    });
  }

  return {
    items: updatedItems,
    totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: updatedItems.reduce((sum, item) => sum + item.total, 0)
  };
};

export const removeItem = (cart: Cart, productId: number): Cart => {
  const updatedItems = cart.items.filter(item => item.productId !== productId);
  return {
    items: updatedItems,
    totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: updatedItems.reduce((sum, item) => sum + item.total, 0)
  };
};

export const updateItem = (cart: Cart, dto: UpdateCartItemDto): Cart => {
  const updatedItems = cart.items.map(item => {
    if (item.productId === dto.productId) {
      return { ...item, quantity: dto.quantity, total: dto.quantity * item.price };
    }
    return item;
  });

  return {
    items: updatedItems,
    totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: updatedItems.reduce((sum, item) => sum + item.total, 0)
  };
};

export const clearCart = (): Cart => ({
  items: [],
  totalQuantity: 0,
  totalPrice: 0
});