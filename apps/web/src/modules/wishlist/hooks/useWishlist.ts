import { useWishlistContext } from "../context";

export const useWishlist = () => {
  const { wishlist, addItem, removeItem, clearWishlist, isInWishlist } =
    useWishlistContext();

  return {
    wishlist,
    addItem,
    removeItem,
    clearWishlist,
    isInWishlist,
  };
};