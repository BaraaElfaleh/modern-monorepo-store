import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { CartProvider } from "../modules/cart";
import { WishlistProvider } from "../modules/wishlist";
import { AuthProvider } from "../modules/auth";
import { Footer } from "../components/Footer";
// import StoreShowcase from "../components/StoreShowcase.tsx";
export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          {/* <StoreShowcase /> */}

          <Navbar />

          <Outlet />
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  ),
});
