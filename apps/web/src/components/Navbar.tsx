import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Sun, Moon, Heart, User } from "lucide-react";
import { CartDrawer } from "../modules/cart";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">

        <div className="bg-gray-950 dark:bg-gray-900 text-gray-400 text-xs text-center py-1.5 hidden md:block">
          Free shipping on orders over $50 &nbsp;·&nbsp; Use code <span className="text-white font-medium">NEXUS10</span> for 10% off
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <a href="#" className="text-xl font-bold tracking-tight text-gray-950 dark:text-white">
              Nexus<span className="text-blue-600">.</span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">Home</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">Products</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Offers
                <span className="ml-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">Hot</span>
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className={`relative flex items-center transition-all duration-300 ${searchOpen ? "w-56" : "w-9"}`}>
                {searchOpen && (
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-full py-1.5 pl-4 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
                  />
                )}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="absolute right-0 p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={() => setDark(!dark)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Heart className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute top-0.5 right-0.5 bg-blue-600 text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <User className="w-4 h-4" />
              </button>

              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition ml-1">
                Sign in
              </a>
            </div>

            <div className="md:hidden flex items-center gap-1">
              <button onClick={() => setDark(!dark)} className="p-2 text-gray-500 dark:text-gray-400">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-gray-500 dark:text-gray-400"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute top-0.5 right-0.5 bg-blue-600 text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-600 dark:text-gray-300">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 space-y-1">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-full py-2 px-4 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-b border-gray-100 dark:border-gray-800">Home</a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-b border-gray-100 dark:border-gray-800">Products</a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-b border-gray-100 dark:border-gray-800">
              Offers <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">Hot</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-b border-gray-100 dark:border-gray-800">Contact</a>
            <div className="flex gap-2 pt-2">
              <a href="#" className="flex-1 text-center border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 transition">Sign in</a>
              <a href="#" className="flex-1 text-center bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition">Sign up</a>
            </div>
          </div>
        )}

      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};