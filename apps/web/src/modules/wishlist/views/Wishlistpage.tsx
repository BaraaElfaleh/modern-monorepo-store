import { Link } from "@tanstack/react-router";
import { Trash2, Heart, ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../../cart/hooks/useCart"; // افترضت وجود هذا الـ Hook
import { Button } from "../../../../../../packages/ui/src";

export const WishlistPage = () => {
  const { wishlist, removeItem } = useWishlist();
  const { addItem } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="relative">
          <Heart className="w-20 h-20 text-primary/10" strokeWidth={1} />
          <Sparkles className="absolute -top-2 -right-2 text-accent animate-pulse" size={24} />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic mb-2">Your Soul is Wandering</h2>
          <p className="text-text-muted text-sm font-light uppercase tracking-widest">You haven't saved any sacred pieces yet.</p>
        </div>
        <Link to="/products">
          <Button variant="outline" className="px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs gap-3">
            Start Your Collection <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-[1400px] mx-auto px-[6%] py-16 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="mb-16 border-b border-border pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-2">
            <Heart size={12} fill="currentColor" /> Saved Treasures
          </p>
          <h1 className="text-6xl font-bold tracking-tighter uppercase italic leading-none">
            The Wishlist.
          </h1>
        </div>
        <p className="text-[10px] font-medium uppercase tracking-widest text-text-muted italic">
          {wishlist.length} Items resonating with your style
        </p>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishlist.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-surface/30 backdrop-blur-sm rounded-[2rem] border border-border/40 overflow-hidden hover:shadow-elevated transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Floating Actions */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
              >
                <Trash2 size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold tracking-tighter uppercase italic text-text-main line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mt-1">
                    Authentic Piece
                  </p>
                </div>
                <p className="font-black text-primary">${item.price}</p>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={() => addItem({ ...item, productId: item.id, quantity: 1 })}
                variant="default"
                className="w-full py-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 group/btn shadow-soft"
              >
                <ShoppingCart size={14} />
                Add to Bag
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};