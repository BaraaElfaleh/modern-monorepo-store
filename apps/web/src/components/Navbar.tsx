import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Sun,
  Moon,
  Heart,
  User,
  LogIn as LoginIcon,
  ShoppingBag,
} from "lucide-react";
import { cn } from "../../../../packages/ui/src";
import { useAuth } from "../modules/auth";
import { useCart } from "../modules/cart/hooks/useCart";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const { user } = useAuth();
  const { cartCount } = useCart();

  const navigate = useNavigate();

  const searchParams: any = useSearch({ 
    strict: false 
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;


    navigate({
      to: "/products",
      search: (prev: any) => ({ ...prev, q: value || undefined }),
      replace: true, 
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ];

  const iconLinkClass =
    "flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 text-text-main hover:text-primary hover:bg-primary/5 transition-all active:scale-95 shrink-0";

  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] text-center py-2 hidden md:block font-bold">
        Free shipping on orders over $50 · Use code BOHO2026
      </div>

      <div className="px-[4%] md:px-[6%]">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold tracking-tighter text-primary uppercase italic hover:opacity-80 transition-opacity"
            >
              Boho.
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-primary transition-all relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Actions Area */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Search */}
            <div
              className={cn(
                "relative flex items-center bg-surface-muted/50 rounded-full transition-all duration-500",
                searchOpen
                  ? "w-40 sm:w-64 px-3 h-10 md:h-12"
                  : "w-10 md:w-12 h-10 md:h-12 justify-center",
              )}
            >
              <Search
                size={20}
                strokeWidth={1.5}
                className="text-text-muted cursor-pointer hover:text-primary shrink-0"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <input
                  autoFocus
                  placeholder="Search for masterpieces..."
                  className="w-full bg-transparent text-xs outline-none border-none ring-0 placeholder:text-text-muted/40 font-medium ml-2"
                  value={searchParams?.q || ""}
                  onChange={handleSearchChange}
                />
              )}
            </div>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className={cn(iconLinkClass, "hidden sm:flex")}
            >
              <Heart size={22} strokeWidth={1.5} />
            </Link>

            {/* Profile / Login */}
            {user ? (
              <Link to="/profile" className={iconLinkClass}>
                <div className="w-8 h-8 rounded-full border border-primary/20 overflow-hidden ring-2 ring-primary/10 flex items-center justify-center">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={18} className="text-primary" />
                  )}
                </div>
              </Link>
            ) : (
              <Link
                to={"/login" as any}
                search={{ redirect: "/" } as any}
                className={cn(
                  iconLinkClass,
                  "bg-primary/5 text-primary hover:bg-primary hover:text-white",
                )}
              >
                <LoginIcon size={20} strokeWidth={2} />
              </Link>
            )}

            {/* Cart Icon with Dynamic Badge */}
            <Link to="/cart" className={cn(iconLinkClass, "relative group")}>
              <ShoppingBag
                size={22}
                strokeWidth={1.5}
                className="group-hover:text-primary transition-colors"
              />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-white text-[8px] font-black min-w-4 h-4 px-1 flex items-center justify-center rounded-full ring-2 ring-background animate-in zoom-in duration-300">
                  {cartCount > 9 ? "+9" : cartCount}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-primary/5 transition-all shrink-0"
            >
              {isDark ? (
                <Sun size={22} className="text-accent" />
              ) : (
                <Moon size={22} className="text-text-muted" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-surface/98 backdrop-blur-2xl absolute w-full px-8 py-10 space-y-8 shadow-2xl animate-in fade-in slide-in-from-top-4 z-60">
          <div className="space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block text-3xl font-bold tracking-tighter italic uppercase text-text-main"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-border/50 grid grid-cols-1 gap-3">
            <Link
              to="/wishlist"
              className="flex items-center gap-4 p-4 bg-surface-muted/50 rounded-2xl font-bold uppercase tracking-widest text-xs text-text-muted"
              onClick={() => setMobileOpen(false)}
            >
              <Heart size={18} /> My Saved Items
            </Link>

            {!user ? (
              <Link
                to="/login"
                search={{ redirect: "/" }}
                className="flex items-center gap-4 p-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs"
                onClick={() => setMobileOpen(false)}
              >
                <LoginIcon size={18} /> Sign In to Tribe
              </Link>
            ) : (
              <Link
                to="/profile"
                className="flex items-center gap-4 p-4 bg-surface-muted/50 rounded-2xl font-bold uppercase tracking-widest text-xs text-text-muted"
                onClick={() => setMobileOpen(false)}
              >
                <User size={18} /> My Account
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};