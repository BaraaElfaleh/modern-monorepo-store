import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'
import { Button } from "../../../../packages/ui/src"

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for sending message
  };

  return (
    <main className="min-h-screen bg-background animate-in fade-in duration-1000">
      
      {/* Hero Section - Contact */}
      <div className="px-[6%] py-20 border-b border-border/50 bg-surface-muted/20">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Connect with us</p>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter uppercase italic leading-none mb-8">
          Get in <br /> <span className="text-primary/20">Touch.</span>
        </h1>
        <p className="max-w-xl text-text-muted text-sm font-medium leading-relaxed">
          Whether you have a question about our sacred pieces, orders, or just want to share some love, our tribe is here for you.
        </p>
      </div>

      <div className="px-[6%] py-20 grid lg:grid-cols-2 gap-20">
        
        {/* Contact Info & Socials */}
        <div className="space-y-16">
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Email Us</h3>
                <p className="text-xl font-bold tracking-tight">hello@bohotribe.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Call Us</h3>
                <p className="text-xl font-bold tracking-tight">+40 723 000 000</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Visit the Studio</h3>
                <p className="text-xl font-bold tracking-tight italic">Calea Victoriei 12, Bucharest, RO</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-border w-fit">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-6">Follow the Journey</h3>
            <div className="flex gap-4">
              {[ MessageCircle].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                  <Icon size={18} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-border/50 shadow-soft relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-background/50 border border-border/50 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/30 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-background/50 border border-border/50 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/30 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-2">Subject</label>
              <select className="w-full bg-background/50 border border-border/50 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Wholesale</option>
                <option>Artist Collaboration</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-2">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell us your story..."
                className="w-full bg-background/50 border border-border/50 rounded-3xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/30 text-sm resize-none"
              />
            </div>

            <Button className="w-full py-8 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] group shadow-elevated">
              Send Message <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>

      </div>

      {/* Full-width Map Placeholder */}
      <div className="h-[400px] w-full bg-surface-muted relative grayscale opacity-60 hover:grayscale-0 transition-all duration-1000 flex items-center justify-center border-t border-border">
         <div className="text-center">
            <MapPin size={40} className="text-primary/20 mx-auto mb-4" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Interactive Map Placeholder</p>
         </div>
      </div>
    </main>
  )
}