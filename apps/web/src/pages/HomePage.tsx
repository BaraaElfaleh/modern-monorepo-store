import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export function HomePage() {
  const navigate = useNavigate();

  // روابط صور مستقرة وعالية الجودة
  const categories = [
    { 
      name: "Flowy Dresses", 
      slug: "dresses", 
      img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800", 
      grid: "md:row-span-2" 
    },
    { 
      name: "Accessories", 
      slug: "accessories", 
      img: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800", 
      grid: "h-64 md:h-auto" 
    },
    { 
      name: "Footwear", 
      slug: "shoes", 
      img: "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=800", 
      grid: "h-64 md:h-auto" 
    },
    { 
      name: "Summer Essentials", 
      slug: "summer", 
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200", 
      grid: "md:col-span-2 h-64 md:h-auto" 
    },
  ];

  return (
    <div className="bg-background text-text-main min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="px-[6%] py-10">
        <div className="relative min-h-[85vh] flex items-center bg-surface-muted rounded-[2.5rem] overflow-hidden border border-border/50">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600" 
               className="w-full h-full object-cover opacity-40"
               alt="Hero Background"
             />
             <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-2">
                <Sparkles size={14} /> Premium Artisan Collection
              </span>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-text-main leading-[0.9] tracking-tighter">
                Boho for <br/> <span className="text-primary italic font-serif">Wild Souls.</span>
              </h1>
              <p className="text-text-muted text-lg mb-10 max-w-sm leading-relaxed font-light">
                Express your freedom through sustainable textures and handcrafted silhouettes designed for the modern wanderer.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  to="/products"
                  className="bg-primary text-white px-10 py-5 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:scale-[1.05] active:scale-95 transition-all group"
                >
                  Explore Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex justify-center items-center"
            >
               <div className="w-full max-w-lg aspect-square rounded-3xl relative overflow-hidden border-8 border-white dark:border-surface shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover"
                    alt="Featured Boho Style"
                  />
                  <div className="absolute top-10 right-10 bg-background/90 backdrop-blur-md p-5 rounded-2xl border border-border shadow-xl animate-bounce">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Ethically Crafted 🌿</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="px-[8%] py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic">The Categories</h2>
          <div className="h-px flex-1 bg-border mx-10 hidden md:block"></div>
          <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            View All Lookbook
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:h-175">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className={`${cat.grid} bg-surface-muted border border-border/50 rounded-4xl relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all cursor-pointer`}
              onClick={() => navigate({ to: '/products', search: { category: cat.slug } as any })}
            >
              <img src={cat.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt={cat.name} />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <button className="bg-white/95 backdrop-blur px-8 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-105">
                  {cat.name}
                </button>
              </div>
            </motion.div>
          ))}
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
            {[
              "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&w=800",
              "https://images.pexels.com/photos/157757/pexels-photo-157757.jpeg?auto=compress&w=800",
              "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&w=800",
              "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&w=800"
            ].map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5 group cursor-pointer"
              >
                <div className="aspect-3/4 bg-surface-muted rounded-4xl overflow-hidden relative border border-border/30">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Trending" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-md">BESTSELLER</div>
                  <button className="absolute -bottom-15 group-hover:bottom-5 left-5 right-5 bg-white/90 backdrop-blur text-primary py-3 rounded-xl transition-all duration-500 shadow-lg flex items-center justify-center gap-2 font-bold text-xs">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-tight uppercase">Nomad Tunic {i+1}</h3>
                  <div className="flex gap-3 items-center">
                    <span className="text-primary font-bold text-sm">$89.00</span>
                    <span className="text-text-muted line-through text-[11px] opacity-60">$120.00</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shop The Look */}
      <section className="px-[8%] py-32">
        <div className="bg-primary/5 rounded-[3.5rem] p-8 lg:p-20 flex flex-col lg:flex-row gap-20 items-center border border-primary/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-6xl font-bold text-primary mb-8 tracking-tighter leading-none uppercase italic">Shop <br/> The Look</h2>
            <p className="mb-10 text-text-muted text-lg font-light max-w-sm leading-relaxed">
              Curate your vibe effortlessly. Save 15% when you grab the complete "Wanderlust" bundle.
            </p>
            
            <div className="space-y-4 mb-10">
                {[
                  { name: "Silk Wrap Skirt", price: 45, img: "https://images.pexels.com/photos/7622241/pexels-photo-7622241.jpeg?auto=compress&w=150" },
                  { name: "Handmade Shell Necklace", price: 25, img: "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&w=150" },
                  { name: "Rattan Crossbody Bag", price: 65, img: "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&w=150" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-4 bg-background rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-all cursor-pointer group">
                     <img src={item.img} className="w-16 h-16 object-cover rounded-xl border border-border" alt={item.name} />
                     <div className="flex-1 text-sm">
                       <p className="font-bold group-hover:text-primary transition-colors">{item.name}</p>
                       <p className="text-[10px] text-text-muted mt-0.5 tracking-widest uppercase">Handcrafted</p>
                     </div>
                     <p className="font-bold text-primary">${item.price}</p>
                  </div>
                ))}
            </div>
            
            <button className="w-full bg-primary text-white py-6 rounded-2xl font-bold shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
              <ShoppingBag size={18} /> Add Bundle to Cart - $115
            </button>
          </div>
          
          <div className="flex-1 w-full aspect-4/5 rounded-[2.5rem] overflow-hidden order-1 lg:order-2 shadow-2xl border-12 border-white dark:border-surface relative group">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Model Boho Outfit"
            />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
}