import { Heart, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
      <footer className="bg-primary text-primary-foreground pt-24 pb-12 px-[8%]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-black italic tracking-tighter">BOHO.</h3>
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-xs font-light tracking-wide">
              Authentic, sustainable, and free-spirited fashion for the modern soul. Join our movement towards slower living.
            </p>
            <div className="flex gap-5 opacity-80">
              <Heart size={20} className="hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-secondary">Discover</h4>
            <ul className="text-xs space-y-5 font-light opacity-80">
              <li className="hover:translate-x-2 transition-transform cursor-pointer">New Arrivals</li>
              <li className="hover:translate-x-2 transition-transform cursor-pointer">Bestsellers</li>
              <li className="hover:translate-x-2 transition-transform cursor-pointer">Our Story</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-secondary">Connect</h4>
            <ul className="text-xs space-y-5 font-light opacity-80">
              <li className="flex items-center gap-3"><MapPin size={16} strokeWidth={1} /> Bucharest, Romania</li>
              <li className="flex items-center gap-3"><Mail size={16} strokeWidth={1} /> hello@boho.ro</li>
              <li className="flex items-center gap-3"><Phone size={16} strokeWidth={1} /> +40 722 000 111</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-secondary">The Tribe</h4>
            <p className="text-[10px] opacity-60 leading-relaxed uppercase tracking-widest">Sign up for exclusive access and 10% off your first order.</p>
            <div className="flex bg-white/10 p-1.5 rounded-xl border border-white/10 group focus-within:border-white/30 transition-all">
              <input type="text" placeholder="Email Address" className="bg-transparent px-4 py-2 flex-1 text-xs outline-none placeholder:text-white/30" />
              <button className="bg-white text-primary px-5 py-2 rounded-lg font-black text-[10px] uppercase hover:bg-secondary transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] opacity-30 uppercase tracking-[0.5em] font-bold">
            © 2026 Boho Global - Scholarship Application Design Portfolio
          </p>
        </div>
      </footer> 
  )}