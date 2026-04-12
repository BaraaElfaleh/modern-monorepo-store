import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { CartProvider } from "../modules/cart";
import { WishlistProvider } from "../modules/wishlist";

export const Route = createRootRoute({
  component: () => (
    <CartProvider>
      <WishlistProvider>
        <Navbar />
        <Outlet />
      </WishlistProvider>
    </CartProvider>
  ),
});