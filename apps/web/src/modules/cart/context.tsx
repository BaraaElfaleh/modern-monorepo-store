import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Cart, CartItem } from './entities/entity';
import type { UpdateCartItemDto } from './dto/dto';
import * as cartService from './services/service';

interface CartContextType {
  cart: Cart;
  totalAmount: number; // أضفتها لتسهيل الوصول للمبلغ الإجمالي في الـ Checkout
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateItem: (dto: UpdateCartItemDto) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

// مفتاح التخزين في المتصفح
const CART_STORAGE_KEY = 'boho_sacred_cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // 1. قراءة البيانات من الـ LocalStorage عند تحميل التطبيق لأول مرة
  const [cart, setCart] = useState<Cart>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : cartService.clearCart();
    }
    return cartService.clearCart();
  });

  // 2. حفظ أي تغيير يحدث في السلة داخل الـ LocalStorage تلقائياً
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: CartItem) => setCart(prev => cartService.addItem(prev, item));
  const removeItem = (productId: number) => setCart(prev => cartService.removeItem(prev, productId));
  const updateItem = (dto: UpdateCartItemDto) => setCart(prev => cartService.updateItem(prev, dto));
  const clearCart = () => {
    const emptyCart = cartService.clearCart();
    setCart(emptyCart);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  // حساب الإجمالي لتسهيل العمل في صفحة الـ Checkout
  const totalAmount = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, totalAmount, addItem, removeItem, updateItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used inside CartProvider');
  return ctx;
};