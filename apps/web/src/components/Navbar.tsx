import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X, Sun, Moon, Heart, User } from "lucide-react";
import { Button, cn } from "../../../../packages/ui/src"; 
import { CartDrawer } from "../modules/cart";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="bg-background border-b border-text/10 sticky top-0 z-50 transition-all duration-500 ease-in-out">
      
      {/* Top Bar - انسيابي أكثر */}
      <div className="bg-primary text-white text-[10px] uppercase tracking-widest text-center py-2 hidden md:block font-semibold">
        Free shipping on orders over $50 · Use code <span className="underline decoration-accent underline-offset-4">NEXUS10</span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20"> {/* زدنا الارتفاع للراحة البصرية */}

          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-black tracking-tighter text-text hover:opacity-80 transition-opacity">
              NEXUS<span className="text-primary">.</span>
            </a>

            {/* Main Nav Links - مسافات مدروسة */}
            <div className="hidden lg:flex items-center gap-8">
              {["Home", "Products", "Contact"].map((link) => (
                <a 
                  key={link} 
                  className="text-sm font-medium text-text-muted hover:text-primary transition-all relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Action Icons Section */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Search - Dynamic Width */}
            <div className={cn(
              "relative flex items-center bg-surface rounded-full transition-all duration-300 border border-transparent focus-within:border-primary/30",
              searchOpen ? "w-64 px-3" : "w-10 h-10 justify-center"
            )}>
              <Search 
                size={18} 
                className={cn("text-text-muted cursor-pointer hover:text-primary transition-colors", searchOpen && "mr-2")} 
                onClick={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <input
                  autoFocus
                  placeholder="Search products..."
                  className="w-full bg-transparent text-text text-sm outline-none placeholder:text-text-muted/50"
                />
              )}
              {searchOpen && <X size={14} className="text-text-muted cursor-pointer" onClick={() => setSearchOpen(false)} />}
            </div>

            {/* Theme Toggle - Animated */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsDark(!isDark)}
              className="rounded-full hover:bg-primary/10 group"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400 rotate-0 transition-transform duration-500 group-hover:rotate-90" />
              ) : (
                <Moon size={20} className="text-text-muted rotate-0 transition-transform duration-500 group-hover:-rotate-12" />
              )}
            </Button>

            <div className="h-6 w-[1px] bg-text/10 mx-1 hidden md:block" /> {/* Divider */}

            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full text-text-muted hover:text-primary">
              <User size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full text-text-muted hover:text-primary">
              <Heart size={20} />
            </Button>

            {/* Cart with Badge */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full text-text-muted hover:text-primary" 
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-background">
                3
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden rounded-full" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile Menu - Premium Look */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-text/10 bg-background/95 backdrop-blur-md absolute w-full px-6 py-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="space-y-4">
            {["Home", "Products", "Offers", "Contact"].map((item) => (
              <a key={item} className="block text-lg font-semibold text-text hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="primary" className="w-full py-6 text-base">Sign In</Button>
            <Button variant="outline" className="w-full py-6 text-base">Create Account</Button>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};