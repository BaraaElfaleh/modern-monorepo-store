import { useState, useEffect } from 'react'
import { 
  User as UserIcon, Mail, MapPin, Package, LogOut, Heart, Star, ShoppingBag, Clock
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../modules/auth/context' // تأكد من المسار الصحيح للـ Hook الخاص بك

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'In Transit' | 'Delivered';
}

export function ProfilePage() {
  // 1. جلب البيانات من الـ Context (التي أصبحت ثابتة عند الريفرش)
  const { user, logout, isLoading } = useAuth();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const syncDashboardData = () => {
    // جلب البيانات مع وضع قيم افتراضية فارغة لتجنب الـ Errors
    const savedOrders = JSON.parse(localStorage.getItem('ecom_orders') || '[]');
    const savedWishlist = JSON.parse(localStorage.getItem('ecom_wishlist') || '[]');
    const savedCart = JSON.parse(localStorage.getItem('ecom_cart') || '[]');
    
    setOrders(savedOrders);
    setWishlistCount(savedWishlist.length);
    setCartCount(savedCart.length);
  };

  useEffect(() => {
    if (user) {
      syncDashboardData();
    }


    const handleStorageChange = () => syncDashboardData();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [user]);


  const totalSpent = orders.reduce((acc, order) => acc + order.total, 0);


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary uppercase font-black tracking-widest animate-pulse">
        Initializing Tribe Data...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-text-muted uppercase text-xs font-bold">Access Denied</p>
        <button onClick={() => window.location.href = '/login'} className="text-primary font-black underline italic">Return to Gateway</button>
      </div>
    );
  }

  const stats = [
    { label: 'Active Orders', value: orders.length.toString(), icon: Package },
    { label: 'Wishlist Items', value: wishlistCount.toString(), icon: Heart },
    { label: 'Style Points', value: Math.floor(totalSpent * 1.5).toString(), icon: Star },
  ];

  return (
    <div className="bg-background text-text-main min-h-screen pb-20 selection:bg-primary/30 animate-in fade-in duration-700">
      
      {/* Profile Header */}
      <div className="h-56 bg-gradient-to-r from-primary/20 via-surface-muted to-primary/10 w-full relative">
        <div className="absolute -bottom-16 left-[6%] flex items-end gap-6">
          <div className="relative group">
            <img 
              src={user?.image || user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
              className="w-40 h-40 rounded-[2.5rem] border-8 border-background bg-surface-muted object-cover shadow-2xl transition-transform group-hover:scale-105 duration-500"
              alt="UserProfile"
            />
          </div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold tracking-tighter uppercase italic">
              {user?.firstName || user?.username} {user?.lastName || ''}
            </h1>
            <div className="flex gap-3 items-center mt-1">
              <span className="bg-primary text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                {totalSpent > 500 ? 'Elite Member' : 'Tribe Member'}
              </span>
              {cartCount > 0 && (
                <span className="text-accent text-[9px] font-bold flex items-center gap-1 uppercase tracking-widest">
                  <ShoppingBag size={12} /> {cartCount} In Cart
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[6%] mt-28 grid lg:grid-cols-12 gap-10">
        {/* Identity Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface/30 backdrop-blur-xl border border-border/40 p-8 rounded-[2.5rem] shadow-sm">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-primary/60 italic border-b border-border/20 pb-4">Personal Registry</h2>
            <div className="space-y-6">
              <InfoRow icon={UserIcon} label="Handle" value={`@${user?.username}`} />
              <InfoRow icon={Mail} label="Registry" value={user?.email} />
             <InfoRow 
  icon={MapPin} 
  label="Base Location" 
  value={(user as any)?.address?.city || (user as any)?.city || "Not Specified"} 
/>
            </div>
          </div>
          
          <button 
            onClick={logout} 
            className="w-full flex items-center justify-center gap-2 p-5 text-accent/40 hover:text-accent hover:bg-accent/5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all border border-transparent hover:border-accent/20"
          >
            <LogOut size={14} /> Terminate Session
          </button>
        </div>

        {/* Analytics & History */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface/10 border border-border/20 p-7 rounded-[2.2rem] hover:border-primary/40 transition-all group"
              >
                <stat.icon size={20} className="text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* History Section */}
          <div className="bg-surface/30 backdrop-blur-xl border border-border/40 p-8 rounded-[3rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter italic">Recent Journey</h2>
              <Clock size={18} className="text-text-muted opacity-30" />
            </div>
            
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-border/10 rounded-[2.5rem]">
                  <ShoppingBag size={40} className="mx-auto text-border/20 mb-4" />
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-[0.2em]">Your journey is just beginning</p>
                </div>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="group flex items-center gap-6 p-5 rounded-[2rem] border border-border/20 bg-background/20 hover:bg-background/60 transition-all">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 group-hover:scale-95 transition-transform">
                       <Package size={20} className="text-primary/60" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black uppercase tracking-tighter">ORDER-{order.id.slice(0, 8)}</p>
                      <p className="text-[10px] text-text-muted font-bold mt-1 uppercase tracking-tighter opacity-60">
                        Purchased on {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-primary text-lg">${order.total}</p>
                      <span className="text-[8px] font-black uppercase tracking-[0.15em] py-1 px-2 bg-primary/5 rounded-md text-primary/70">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function InfoRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4 group/item">
      <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center text-text-muted group-hover/item:border-primary/40 group-hover/item:text-primary transition-all">
        <Icon size={18} />
      </div>
      <div className="overflow-hidden">
        <p className="text-[8px] uppercase font-black text-text-muted/40 tracking-[0.2em]">{label}</p>
        <p className="text-xs font-bold truncate group-hover/item:text-text-main transition-colors">{value}</p>
      </div>
    </div>
  )
}