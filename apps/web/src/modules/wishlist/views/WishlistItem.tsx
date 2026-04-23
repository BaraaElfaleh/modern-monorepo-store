import { Trash2, ShoppingCart } from "lucide-react";
import type { WishlistItem as WishlistItemType } from "../entities/entity";
import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../../cart/hooks/useCart";

export const WishlistItem = ({ item }: { item: WishlistItemType }) => {
  const { removeItem } = useWishlist();
  const { addItem: addToCart } = useCart();

  // 🛒 move to cart + remove from wishlist
  const handleMoveToCart = () => {
    addToCart({
      id: item.productId,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      quantity: 1,
    });

    removeItem(item.productId);
  };

  // ❤️ remove only
  const handleRemove = () => {
    removeItem(item.productId);
  };

  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 dark:border-gray-800">

      {/* IMAGE */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-xl"
      />

      {/* INFO */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {item.title}
        </p>

        <p className="text-sm text-blue-600 font-semibold mt-0.5">
          ${item.price}
        </p>

        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs text-gray-400">
            {item.rating ?? 4.0}
          </span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2">

        {/* 🛒 Add to cart */}
        <button
          onClick={handleMoveToCart}
          className="flex items-center gap-1.5 text-xs border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition px-3 py-1.5 rounded-full"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        {/* 🗑 remove */}
        <button
          onClick={handleRemove}
          className="p-1.5 text-gray-400 hover:text-red-500 transition"
        >
          <Trash2 className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};