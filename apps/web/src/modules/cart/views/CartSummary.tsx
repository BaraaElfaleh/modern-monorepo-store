// views/CartSummary.tsx
import { useCart } from '../hooks/useCart';
import { Link } from '@tanstack/react-router'; // استيراد Link بدلاً من useNavigate
import { ShoppingBag, Trash2 } from 'lucide-react';

export const CartSummary = () => {
  const { cart, clearCart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="pt-6 space-y-4 border-t border-border/50">
      <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-text-muted">
        <span>Items ({totalQuantity})</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between text-xl font-bold tracking-tighter italic text-text-main">
        <span>Total Amount</span>
        <span className="text-primary">${totalPrice.toFixed(2)}</span>
      </div>

      <div className="space-y-2 pt-2">
        {/* تحويل الزر إلى Link - Proceed to Ritual */}
        <Link
          to="/checkout"
          className="flex items-center justify-center gap-2 w-full bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] py-4 rounded-2xl hover:opacity-90 hover:shadow-elevated transition-all active:scale-[0.98] cursor-pointer no-underline"
        >
          <ShoppingBag size={16} />
          Proceed to Ritual
        </Link>

        {/* زر مسح السلة يظل كما هو لأنه ليس انتقالاً لمسار جديد */}
        <button
          onClick={(e) => {
            e.preventDefault();
            clearCart();
          }}
          className="flex items-center justify-center gap-2 w-full border border-border text-text-muted text-[10px] font-bold uppercase tracking-widest py-3 rounded-2xl hover:bg-accent/5 hover:text-accent hover:border-accent/20 transition-all cursor-pointer"
        >
          <Trash2 size={14} />
          Clear Sacred Cart
        </button>
      </div>
    </div>
  );
};