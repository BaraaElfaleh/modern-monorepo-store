import { createRootRouteWithContext, Outlet, Link } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../app/QueryClient";

import { Navbar } from "../components/Navbar";
import { CartProvider } from "../modules/cart";
import { WishlistProvider } from "../modules/wishlist";
import { Footer } from "../components/Footer";
import { CheckoutProvider } from "../modules/checkout/context"; 

// 1. تعريف نوع الـ Context ليعرف الراوتر بوجود auth
interface MyRouterContext {
  auth: any; // أو استخدم النوع الخاص بك من AuthContextType
}

// 2. استخدام createRootRouteWithContext بدلاً من createRootRoute
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <QueryClientProvider client={queryClient}>
      {/* الـ AuthProvider تم نقله لملف main.tsx لضمان توفر البيانات للراوتر */}
      <CartProvider>
        <WishlistProvider>
          <CheckoutProvider>
            <div className="flex flex-col min-h-screen bg-background">
              <Navbar />

              <main className="grow">
                <Outlet />
              </main>

              <Footer />
            </div>
          </CheckoutProvider>
        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  ),
  
  notFoundComponent: () => (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h2 className="text-8xl font-bold tracking-tighter text-primary/10">404</h2>
        <h3 className="text-2xl font-bold tracking-tighter uppercase italic -mt-8 mb-2">
          This Path is Lost
        </h3>
        <p className="text-text-muted text-sm font-light uppercase tracking-widest">
          The piece you are looking for has wandered away.
        </p>
      </div>
      <Link 
        to="/" 
        className="px-10 py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  ),
});