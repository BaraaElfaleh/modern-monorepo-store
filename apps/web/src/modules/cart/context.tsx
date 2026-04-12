// context.tsx
import { createContext, useContext, useState, type  ReactNode } from 'react';
import type { Cart, CartItem } from './entities/entity';
import type { UpdateCartItemDto } from './dto/dto';
import * as cartService from './services/service';

interface CartContextType {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateItem: (dto: UpdateCartItemDto) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>(cartService.clearCart());

  const addItem = (item: CartItem) => setCart(prev => cartService.addItem(prev, item));
  const removeItem = (productId: number) => setCart(prev => cartService.removeItem(prev, productId));
  const updateItem = (dto: UpdateCartItemDto) => setCart(prev => cartService.updateItem(prev, dto));
  const clearCart = () => setCart(cartService.clearCart());

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used inside CartProvider');
  return ctx;
};