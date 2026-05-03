import { ArrowRight, Heart, ShoppingBag, X } from "lucide-react";
import { Button } from "../../../../packages/ui/src"; 
import { useWishlist } from "../modules/wishlist/hooks/useWishlist";
import { useCart } from "../modules/cart/hooks/useCart";

interface WishlistItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description?: string;
    category?: string;
  };
}


export const WishlistItem = ({ item }: WishlistItemProps) => {
  const { wishlist, removeItem: removeFromWishlist, addItem: addToWishlist } = useWishlist();
  const { addItem: addToCart, removeItem: removeFromCart, isInCart } = useCart();


const isFavorite = wishlist.some((fav) => String(fav.id) === String(item.id));
  const inCart = isInCart(item.id);

  const handleWishlistToggle = () => {
    if (isFavorite) {
      removeFromWishlist(item.id as unknown as number);
    } else {
      addToWishlist({
  ...item,
  title: item.name,
  thumbnail: item.imageUrl,
} as any);
    }
  };

  const handleCartToggle = () => {
    if (inCart) {
      removeFromCart(item.id);
    } else {
      // نمرر الـ item مباشرة والـ Hook سيتكفل بالباقي
      addToCart(item);
    }
  };

  return (
    <div className="group relative bg-surface/30 backdrop-blur-sm rounded-4xl border border-border/40 overflow-hidden hover:shadow-elevated transition-all duration-500">
      
      {/* Image Container */}
      <div className="relative aspect-4/5 overflow-hidden bg-surface-muted">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Wishlist Toggle Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 z-10"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            size={18} 
            strokeWidth={2} 
            className={`transition-colors duration-300 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`} 
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold tracking-tighter uppercase italic text-text-main line-clamp-1">
              {item.name}
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mt-1">
              {item.category || "Authentic Piece"}
            </p>
          </div>
          <p className="font-black text-primary shrink-0">${item.price}</p>
        </div>

        {/* Cart Action Button */}
        <Button
          onClick={handleCartToggle}
          variant={inCart ? "outline" : "primary"}
          className={`w-full py-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 group/btn shadow-soft transition-all duration-300 ${
            inCart ? "border-accent/30 text-accent hover:bg-accent/5" : ""
          }`}
        >
          {inCart ? (
            <>
              <X size={14} className="animate-in zoom-in duration-300" /> 
              Remove From Bag
            </>
          ) : (
            <>
              <ShoppingBag size={14} className="animate-in zoom-in duration-300" />
              Add to Bag
              <ArrowRight 
                size={14} 
                className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" 
              />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};