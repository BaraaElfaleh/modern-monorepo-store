// views/WishlistPage.tsx
import { Link } from '@tanstack/react-router';
import { Heart, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { WishlistItem } from './WishlistItem';

export const WishlistPage = () => {
  const { wishlist, clearWishlist } = useWishlist();

  if (wishlist.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-4">
        <Heart className="w-16 h-16 text-gray-200 dark:text-gray-700" />
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          Your wishlist is empty
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Save products you love to find them later
        </p>
        <Link
          to="/"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2.5 rounded-full transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="p-2 text-gray-400 hover:text-blue-600 transition">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Wishlist
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({wishlist.totalItems} items)
          </span>
        </h1>
      </div>

      <div className="max-w-2xl">
        {wishlist.items.map(item => (
          <WishlistItem key={item.productId} item={item} />
        ))}

        <button
          onClick={clearWishlist}
          className="mt-4 text-sm text-gray-400 hover:text-red-500 transition"
        >
          Clear wishlist
        </button>
      </div>
    </main>
  );
};