// CartPage.tsx
import { Link } from "@tanstack/react-router";
import { Trash2, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { Button } from "../../../../../../packages/ui/src"; 
import { CartItem } from "..";

export const CartPage = () => {
 const { cart, clearCart, totalPrice, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-32 h-32 bg-surface-muted rounded-[3rem] flex items-center justify-center border border-border animate-bounce">
          <ShoppingBag className="w-12 h-12 text-primary/20" strokeWidth={1} />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic mb-2">Your Bag is Empty</h2>
          <p className="text-text-muted text-sm font-light uppercase tracking-widest">Let's find some wild pieces for your soul.</p>
        </div>
        <Link to="/products">
          <Button className="px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs gap-3">
            Explore Collection <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-[1400px] mx-auto px-[6%] py-16 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-10">
        <div>
          <div className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors cursor-pointer mb-4 group" onClick={() => window.history.back()}>
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Gallery</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tighter uppercase italic leading-none">
            Your Tribe Bag.
          </h1>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">
            Curating {cartCount} Sacred Items
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Items List */}
        <div className="flex-1">
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id || item.productId || `cart-item-${index}`} item={item} />
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-10 text-[10px] font-black uppercase tracking-widest text-text-muted/50 hover:text-accent transition-colors flex items-center gap-2"
          >
            <Trash2 size={14} /> Reset Selection
          </button>
        </div>

        {/* Order Summary Card */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-surface/40 backdrop-blur-xl rounded-[2.5rem] p-10 space-y-8 sticky top-32 border border-border/50 shadow-soft">
            <h2 className="text-2xl font-bold tracking-tighter uppercase italic border-b border-border pb-6">
              Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-text-muted uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                <span className="font-black">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-text-muted uppercase tracking-widest text-[10px] font-bold">Nature Shipping</span>
                <span className="text-secondary font-black tracking-widest text-[10px] uppercase">Complimentary</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-border">
              <span className="text-lg font-bold tracking-tighter uppercase italic">Total</span>
              <span className="text-3xl font-black text-primary italic leading-none">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="space-y-4 pt-4">
              {/* تعديل الزر ليصبح Link موجه لمسار الـ Checkout المحمي */}
              <Link to="/checkout" className="block">
                <Button className="w-full py-8 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] shadow-elevated group">
                  Proceed to Checkout <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/products" className="block">
                <button className="w-full text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors py-2">
                  Continue Curating
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};