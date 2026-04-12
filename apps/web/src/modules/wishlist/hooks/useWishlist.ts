// hooks/useWishlist.ts
import { useWishlistContext } from '../context';
import { adaptWishlistItem } from '../adapters/adapter';

export const useWishlist = () => {
  const { wishlist, addItem, removeItem, clearWishlist, isInWishlist } = useWishlistContext();

  const handleAdd = (product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
  }) => {
    const item = adaptWishlistItem(product);
    addItem(item);
  };

  return {
    wishlist,
    addItem: handleAdd,
    removeItem,
    clearWishlist,
    isInWishlist,
  };
};