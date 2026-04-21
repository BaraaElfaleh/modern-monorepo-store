import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthContext } from '../modules/auth' 
import { 
  User, 
  Mail, 
  MapPin, 
  Package, 
  Settings, 
  LogOut, 
  Camera,
  ShieldCheck,
  Heart,
  CreditCard
} from 'lucide-react'
import { Button } from "../../../../packages/ui/src"

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()

  // إذا لم يكن هناك مستخدم، نتوجه لتسجيل الدخول
  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <p className="text-text-muted italic">Please login to view your profile.</p>
        <Button onClick={() => navigate({ to: '/login' })}>Go to Login</Button>
      </div>
    )
  }

  return (
    <div className="bg-background text-text-main min-h-screen pb-20 animate-in fade-in duration-700">
      
      {/* Header / Cover Space */}
      <div className="h-48 bg-primary/10 w-full relative">
        <div className="absolute -bottom-16 left-[6%] flex items-end gap-6">
          <div className="relative group">
            <img 
              src={user.image} 
              alt={user.username} 
              className="w-32 h-32 rounded-[2rem] border-4 border-background bg-surface-muted object-cover shadow-elevated"
            />
            <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={16} />
            </button>
          </div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold tracking-tighter uppercase italic">{user.firstName} {user.lastName}</h1>
            <p className="text-text-muted text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary" /> Boho Tribe Member
            </p>
          </div>
        </div>
      </div>

      <div className="px-[6%] mt-24 grid lg:grid-cols-3 gap-10">
        
        {/* Left Column: Personal Info */}
        <div className="space-y-6">
          <div className="bg-surface/40 backdrop-blur-md border border-border/50 p-8 rounded-[2rem] shadow-soft">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 border-b border-border pb-4">Personal Details</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-tighter">Username</p>
                  <p className="text-sm font-medium">@{user.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-tighter">Email</p>
                  <p className="text-sm font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-tighter">Location</p>
                  <p className="text-sm font-medium italic">Bucharest, RO</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-8 rounded-xl text-xs gap-2 py-6">
              <Settings size={14} /> Edit Profile
            </Button>
          </div>

          <button 
            onClick={() => logout()}
            className="w-full flex items-center justify-center gap-2 p-4 text-accent font-bold text-xs uppercase tracking-widest hover:bg-accent/5 rounded-xl transition-colors"
          >
            <LogOut size={16} /> Logout Account
          </button>
        </div>

        {/* Right Column: Dashboard / Activity */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Orders', value: '12', icon: Package },
              { label: 'Wishlist', value: '24', icon: Heart },
              { label: 'Saved Cards', value: '2', icon: CreditCard },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-muted/30 border border-border/50 p-6 rounded-3xl group hover:bg-primary transition-all duration-500">
                <stat.icon size={20} className="text-primary mb-4 group-hover:text-white transition-colors" />
                <p className="text-2xl font-black group-hover:text-white transition-colors">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted group-hover:text-white/60 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders (Placeholder) */}
          <div className="bg-surface/40 backdrop-blur-md border border-border/50 p-8 rounded-[2.5rem] shadow-soft">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold tracking-tighter uppercase italic">Recent Journey</h2>
              <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary pb-1">View All</button>
            </div>

            <div className="space-y-4">
              {[1, 2].map((order) => (
                <div key={order} className="flex items-center gap-6 p-4 rounded-2xl border border-border/50 hover:bg-background transition-colors">
                  <div className="w-16 h-16 bg-surface-muted rounded-xl flex items-center justify-center italic text-primary/20 font-black">
                    IMG
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest">Order #BOHO-{8432 + order}</p>
                    <p className="text-[10px] text-text-muted mt-1">Processed on April {15 + order}, 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">$124.00</p>
                    <span className="text-[9px] bg-secondary/20 text-secondary px-2 py-1 rounded-full font-black uppercase">Delivered</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}