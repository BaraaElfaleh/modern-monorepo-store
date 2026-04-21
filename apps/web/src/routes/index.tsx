import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  ShoppingBag, 
  ArrowRight, 
  Heart,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

// تعريف المسار
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // ملاحظة: يمكنك إضافة حالة الـ Dark mode هنا أو استدعاؤها من الـ Context
  const [isDark] = useState(false);

  return (
    <div className={`bg-background text-text-main min-h-screen font-sans transition-all duration-500 ${isDark ? 'dark' : ''}`}>
      
      {/* 1. Hero Section */}
      <section className="px-[6%] py-10">
        <div className="relative min-h-[75vh] flex items-center bg-surface-muted rounded-[2.5rem] overflow-hidden border border-border/50">
          <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 animate-in fade-in slide-in-from-bottom duration-1000">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Premium Artisan Collection</span>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-text-main leading-[0.9] tracking-tighter">
                Boho for <br/> <span className="text-primary italic font-serif">Wild Souls.</span>
              </h1>
              <p className="text-text-muted text-lg mb-10 max-w-sm leading-relaxed font-light">
                Discover the harmony of nature and sustainable fashion through our latest handcrafted pieces.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-all group">
                  Explore Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="relative h-full flex justify-center items-center">
               <div className="w-full max-w-lg aspect-square bg-secondary/20 rounded-3xl relative overflow-hidden group border border-secondary/10 flex items-center justify-center">
                  <span className="text-primary/5 text-9xl font-black italic select-none">BOHO</span>
                  <div className="absolute top-10 right-10 bg-background/90 backdrop-blur-md p-5 rounded-2xl border border-border shadow-md animate-bounce">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Ethically Crafted 🌿</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="px-[8%] py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic">The Categories</h2>
          <div className="h-[1px] flex-1 bg-border mx-10 hidden md:block"></div>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">View All Lookbook</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:h-[650px]">
          <div className="md:row-span-2 bg-surface-muted border border-border/50 rounded-3xl relative overflow-hidden group shadow-sm transition-all hover:shadow-xl">
            <div className="absolute bottom-8 left-8 z-10">
              <button className="bg-background/95 backdrop-blur px-8 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                Flowy Dresses
              </button>
            </div>
          </div>
          <div className="h-64 md:h-auto bg-secondary/10 border border-border/50 rounded-3xl relative overflow-hidden group shadow-sm transition-all hover:shadow-xl">
             <div className="absolute bottom-8 left-8 z-10">
              <button className="bg-background/95 backdrop-blur px-8 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                Accessories
              </button>
            </div>
          </div>
          <div className="h-64 md:h-auto bg-surface-muted border border-border/50 rounded-3xl relative overflow-hidden group shadow-sm transition-all hover:shadow-xl">
             <div className="absolute bottom-8 left-8 z-10">
              <button className="bg-background/95 backdrop-blur px-8 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                Footwear
              </button>
            </div>
          </div>
          <div className="md:col-span-2 h-64 md:h-auto bg-primary/5 border border-border/50 rounded-3xl relative overflow-hidden group shadow-sm transition-all hover:shadow-xl">
             <div className="absolute bottom-8 left-8 z-10">
              <button className="bg-background/95 backdrop-blur px-8 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                Summer Essentials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trending Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="px-[8%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 italic">Trending Now</h2>
            <p className="text-text-muted text-[10px] uppercase tracking-[0.4em]">Most loved by our community</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-5 group">
                <div className="aspect-[3/4] bg-surface-muted rounded-3xl overflow-hidden relative border border-border/30">
                  <div className="absolute top-4 right-4 bg-accent text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-md">SALE</div>
                  <button className="absolute bottom-[-60px] group-hover:bottom-5 left-5 right-5 bg-primary text-white py-3 rounded-xl transition-all duration-500 shadow-lg flex items-center justify-center gap-2 font-bold text-xs">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-tight">Artisan Item #{i}</h3>
                  <div className="flex gap-3 items-center">
                    <span className="text-primary font-bold text-sm">$45.00</span>
                    <span className="text-text-muted line-through text-[11px] opacity-60">$65.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shop The Look */}
      <section className="px-[8%] py-32">
        <div className="bg-secondary/20 rounded-[3rem] p-16 flex flex-col lg:flex-row gap-20 items-center border border-secondary/20 relative">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-5xl font-bold text-primary mb-8 tracking-tighter leading-none uppercase italic">Shop <br/> The Look</h2>
            <p className="mb-10 text-text-muted text-lg font-light max-w-sm leading-relaxed">
              Curate your vibe. Save 15% when you grab the entire "Desert Wanderer" bundle.
            </p>
            
            <div className="space-y-4 mb-10">
               {[1,2,3].map(item => (
                 <div key={item} className="flex items-center gap-5 p-4 bg-background/60 backdrop-blur rounded-xl shadow-sm border border-border hover:bg-background transition-all cursor-pointer">
                    <div className="w-14 h-14 bg-surface-muted rounded-xl border border-border"></div>
                    <div className="flex-1 text-sm">
                      <p className="font-bold">Artisan Piece {item}</p>
                      <p className="text-[10px] text-text-muted mt-0.5">Handcrafted</p>
                    </div>
                    <p className="font-bold text-primary">$35</p>
                 </div>
               ))}
            </div>
            
            <button className="w-full bg-primary text-white py-5 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
              <ShoppingBag size={18} /> Add Bundle to Cart - $105
            </button>
          </div>
          
          <div className="flex-1 w-full aspect-square bg-surface-muted rounded-3xl overflow-hidden order-1 lg:order-2 shadow-xl border-8 border-white dark:border-surface transition-all">
            <div className="w-full h-full flex items-center justify-center italic text-primary/10 text-3xl font-black uppercase">Model View</div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
    
    </div>
  )
}