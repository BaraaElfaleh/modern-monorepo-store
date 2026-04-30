// views/CartSummary.tsx
import { useCart } from '../hooks/useCart';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingBag, Trash2 } from 'lucide-react';

export const CartSummary = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    /**
     * بناءً على ملف routeTree.gen.ts الخاص بك:
     * المعرف (ID) الصحيح للمسار هو '/_authenticated/checkout'
     * كتابة المسار كاملاً تضمن أن TanStack Router يوجهك للمسار المحمي بشكل صحيح
     */
    navigate({ 
      to: '/_authenticated/checkout' 
    });
  };

  return (
    <div className="pt-6 space-y-4 border-t border-border/50">
      <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-text-muted">
        <span>Items ({cart.totalQuantity})</span>
        <span>${cart.totalPrice.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between text-xl font-bold tracking-tighter italic text-text-main">
        <span>Total Amount</span>
        <span className="text-primary">${cart.totalPrice.toFixed(2)}</span>
      </div>

      <div className="space-y-2 pt-2">
        {/* زر إتمام العملية - Proceed to Ritual */}
        <button
          onClick={handleCheckout}
          className="flex items-center justify-center gap-2 w-full bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] py-4 rounded-2xl hover:opacity-90 hover:shadow-elevated transition-all active:scale-[0.98] cursor-pointer"
        >
          <ShoppingBag size={16} />
          Proceed to Ritual
        </button>

        {/* زر مسح السلة - Clear Cart */}
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