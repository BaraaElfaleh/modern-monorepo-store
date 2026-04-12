// views/CartDrawer.tsx
import { X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { cart } = useCart();

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-950 z-50 shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">Cart ({cart.totalQuantity})</h2>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-60px)] px-4 overflow-y-auto">
          {cart.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-sm text-gray-400">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="flex-1">
                {cart.items.map(item => (
                  <CartItem key={item.productId} item={item} />
                ))}
              </div>
              <CartSummary />
            </>
          )}
        </div>
      </div>
    </>
  );
};