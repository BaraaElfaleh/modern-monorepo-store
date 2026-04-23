import { createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../app/queryClient";

import { Navbar } from "../components/Navbar";
import { CartProvider } from "../modules/cart";
import { WishlistProvider } from "../modules/wishlist";
import { AuthProvider } from "../modules/auth";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <Outlet />
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  ),
});