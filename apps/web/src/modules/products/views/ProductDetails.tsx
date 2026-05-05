import { Route } from "../../../routes/products/$id";
import { useProduct } from "../hooks/useProduct";
import {  Heart, Tag, Star, ArrowLeft, ShieldCheck, Truck,  ArrowRight, ShoppingBag, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useWishlist } from "../../wishlist/hooks/useWishlist";
import { useCart } from "../../cart/hooks/useCart";
import { Button } from "../../../../../../packages/ui/src";

export const ProductDetails = () => {
  const { id } = Route.useParams();
  const productId = Number(id);
  const { data: product, isLoading, error } = useProduct(productId);


  const { wishlist, removeItem: removeFromWishlist, addItem: addToWishlist } = useWishlist();
  const { addItem: addToCart, removeItem: removeFromCart, isInCart } = useCart();

  const isFavorite = wishlist.some((fav) => String(fav.id) === String(product?.id));
  const inCart = product ? isInCart(product.id) : false;

  const handleWishlistToggle = () => {
    if (!product) return;
    if (isFavorite) {
      removeFromWishlist(product.id as unknown as number);
    } else {
      addToWishlist({
        ...product,
        title: product.name,
        thumbnail: product.imageUrl,
      } as any);
    }
  };

  const handleCartToggle = () => {
    if (!product) return;
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-primary font-medium tracking-widest uppercase">
        Loading Collection...
      </div>
    </div>
  );
  
  if (error || !product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h2 className="text-text-muted mb-4">Product not found</h2>
      <Link to="/products" className="text-primary underline font-medium">Return to shop</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-text-main p-6 md:p-12 selection:bg-primary/10 transition-colors duration-500">
      
      {/* 1. Navigation */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link 
          to="/products" 
          className="group inline-flex items-center gap-2 text-text-muted hover:text-primary transition-base"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Collection</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* 2. Image Section */}
        <div className="sticky top-12 bg-surface/50 backdrop-blur-xl border border-border rounded-[var(--radius-card)] p-8 shadow-soft overflow-hidden group">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-auto max-h-[600px] object-contain group-hover:scale-105 transition-base duration-700" 
          />
          <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-black tracking-tighter shadow-lg">
            NEW ARRIVAL
          </div>
        </div>

        {/* 3. Product Info Section */}
        <div className="flex flex-col pt-4">
          <div className="flex items-center gap-2 text-primary uppercase tracking-[0.25em] text-[10px] font-black">
            <Tag size={12} />
            {product.category}
          </div>

          <h1 className="text-5xl font-bold mt-4 leading-[1.1] tracking-tight text-text-main">
            {product.name}
          </h1>

          <div className="flex mt-6 items-center gap-4">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-xs font-medium text-text-muted border-l border-border pl-4 uppercase tracking-wider">
              4.8 Rating (52 Reviews)
            </span>
          </div>

          <div className="mt-8 text-4xl font-bold text-primary tracking-tighter">
            ${product.price}
          </div>

          <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-[55ch] font-medium">
            {product.description}
          </p>

          {/* 4. Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
           <Button
          onClick={handleCartToggle}
          variant={inCart ? "outline" : "primary"}
          className={`w-full py-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 group/btn shadow-soft transition-all duration-300 ${
            inCart ? "border-accent/30 text-accent hover:bg-accent/5" : ""
          }`}
        >
          {inCart ? (
            <>
              <X size={14} className="animate-in zoom-in duration-300" />
              Remove From Bag
            </>
          ) : (
            <>
              <ShoppingBag
                size={14}
                className="animate-in zoom-in duration-300"
              />
              Add to Bag
              <ArrowRight
                size={14}
                className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all"
              />
            </>
          )}
          </Button> 

            <button 
              onClick={handleWishlistToggle}
              className={`bg-surface border p-5 rounded-[var(--radius-button)] transition-base shadow-soft active:scale-95 ${
                isFavorite 
                ? "text-accent border-accent bg-accent/5" 
                : "text-text-main border-border hover:border-primary hover:text-primary"
              }`}
              aria-label="Add to wishlist"
            >
              <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
            </button>

          </div>

          {/* 5. Trust Badges */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-10">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-surface-muted rounded-full text-primary shadow-inner">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-tight">Free Shipping</h4>
                <p className="text-xs text-text-muted mt-1 font-medium italic">On orders over $150</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-surface-muted rounded-full text-primary shadow-inner">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-tight">Authentic Only</h4>
                <p className="text-xs text-text-muted mt-1 font-medium italic">100% Certified Goods</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};