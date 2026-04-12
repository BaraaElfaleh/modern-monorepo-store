// routes/wishlist.tsx
import { createFileRoute } from '@tanstack/react-router';
import { WishlistPage } from '../modules/wishlist';

export const Route = createFileRoute('/wishlist')({
  component: WishlistPage,
});