import { useWishlist } from "../../wishlist/hooks/useWishlist";
import type { Product } from "../dto/dto";
import { Heart } from "lucide-react";

export const Card = ({ product }: { product: Product }) => {
  const { addItem, removeItem, isInWishlist } = useWishlist();

  const liked = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (liked) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      });
    }
  };

  return (
    <article className="group bg-background border border-border rounded-2xl p-4 hover:shadow-lg transition">

      {/* Image */}
      <div className="relative aspect-square bg-surface rounded-xl overflow-hidden mb-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/300";
          }}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition"
        />

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 border border-border transition hover:scale-110"
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-text-muted"
            }
          />
        </button>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <span className="text-xs text-primary font-bold uppercase tracking-widest">
          {product.category}
        </span>

        <h2 className="text-text font-bold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-text-muted text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="font-black text-text">
            ${product.price}
          </span>

          <button className="bg-primary text-white px-4 py-1 rounded-lg hover:bg-primary/80 transition">
            Buy
          </button>
        </div>
      </div>
    </article>
  );
};