import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../hooks/useCart";
import type { CartItem as CartItemType } from "../entities/entity";

export const CartItem = ({ item }: { item: CartItemType }) => {
  // استخدام الدوال مباشرة من الـ hook المعدل
  const { removeItem, updateItem } = useCart();

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 py-8 border-b border-border/50 group animate-in fade-in duration-500">
      {/* Image */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] overflow-hidden bg-surface-muted border border-border/30 shadow-soft group-hover:shadow-elevated transition-all">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left space-y-1">
        <p className="text-lg font-bold tracking-tighter uppercase italic text-text-main leading-tight">
          {item.title}
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold">
          Artisan Collection
        </p>
        <p className="text-primary font-black text-sm mt-2">
          ${item.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4 bg-surface-muted/50 p-2 rounded-full border border-border/50">
        <button
          // التعديل: نمرر productId والكمية الجديدة مباشرة كما صممنا في الـ hook
          onClick={() => updateItem(item.productId, Math.max(1, item.quantity - 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-text-main hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
        >
          <Minus size={14} />
        </button>
        <span className="w-8 text-center font-black text-sm">
          {item.quantity}
        </span>
        <button
          // التعديل: نمرر productId والكمية الجديدة مباشرة
          onClick={() => updateItem(item.productId, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-text-main hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Item Total */}
      <div className="w-24 text-center md:text-right">
        <p className="text-lg font-black text-text-main">
          ${item.total.toFixed(2)}
        </p>
      </div>

      {/* Remove */}
      <button
        // التعديل: نستخدم item.productId بدلاً من id
        onClick={() => removeItem(item.productId)}
        className="p-3 text-text-muted/40 hover:text-accent hover:bg-accent/5 rounded-full transition-all"
      >
        <Trash2 className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </div>
  );
};