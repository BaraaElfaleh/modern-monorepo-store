import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import { useWishlist } from "../hooks/useWishlist";
import { Button } from "../../../../../../packages/ui/src";
import { WishlistItem } from "../../../components/Card";

export const WishlistPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      {/* Container الدائري الناعم مع الحركة - مأخوذ من تصميم الـ Cart */}
      <div className="w-32 h-32 bg-surface-muted rounded-[3rem] flex items-center justify-center border border-border animate-bounce relative">
        <Heart className="w-12 h-12 text-primary/20" strokeWidth={1} />
        {/* إضافة النجوم كعنصر مطلق فوق الحاوية */}
        <Sparkles 
          className="absolute -top-1 -right-1 text-accent animate-pulse" 
          size={28} 
          strokeWidth={1.5}
        />
      </div>

      <div className="text-center">
        {/* نصوص الويشليست بنفس تنسيق الـ Cart */}
        <h2 className="text-4xl font-bold tracking-tighter uppercase italic mb-2">
          Your Soul is Wandering
        </h2>
        <p className="text-text-muted text-sm font-light uppercase tracking-widest">
          You haven't saved any sacred pieces yet.
        </p>
      </div>

      <Link to="/products">
        {/* الزر بنفس التنسيق القوي للـ Cart */}
        <Button className="px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs gap-3">
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
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};