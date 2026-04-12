// views/CartSummary.tsx
import { useCart } from '../hooks/useCart';

export const CartSummary = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="pt-4 space-y-3">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Items ({cart.totalQuantity})</span>
        <span>${cart.totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-gray-800 pt-3">
        <span>Total</span>
        <span>${cart.totalPrice.toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-full transition">
        Checkout
      </button>
      <button
        onClick={clearCart}
        className="w-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm py-2.5 rounded-full hover:border-red-400 hover:text-red-500 transition"
      >
        Clear cart
      </button>
    </div>
  );
};