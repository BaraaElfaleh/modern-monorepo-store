// views/CartItem.tsx
import { Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '../entities/entity';
import { useCart } from '../hooks/useCart';

export const CartItem = ({ item }: { item: CartItemType }) => {
  const { removeItem, updateItem } = useCart();

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 dark:border-gray-800">
      <img src={item.thumbnail} alt={item.title} className="w-14 h-14 object-cover rounded-lg" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.title}</p>
        <p className="text-sm text-blue-600 font-semibold">${item.price}</p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => updateItem({ productId: item.productId, quantity: Math.max(1, item.quantity - 1) })}
          className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition text-sm"
        >
          −
        </button>
        <span className="w-6 text-center text-sm text-gray-800 dark:text-white">{item.quantity}</span>
        <button
          onClick={() => updateItem({ productId: item.productId, quantity: item.quantity + 1 })}
          className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition text-sm"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeItem(item.productId)}
        className="p-1.5 text-gray-400 hover:text-red-500 transition"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};