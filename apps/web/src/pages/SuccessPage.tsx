import { Link } from '@tanstack/react-router';
import { Check, Sparkles, ArrowRight, PackageCheck } from 'lucide-react';
import { Button } from "../../../../packages/ui/src";
import { useEffect, useState } from 'react';

export function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-[6%] py-20">
      {/* الإضاءة الخلفية الناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className={`max-w-xl w-full bg-surface/40 backdrop-blur-2xl border border-border/50 p-12 rounded-[4rem] shadow-soft text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* أيقونة النجاح المتحركة */}
        <div className="relative w-24 h-24 mx-auto mb-10">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping duration-[3s]" />
          <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center shadow-elevated">
            <Check className="text-white" size={40} strokeWidth={3} />
          </div>
          <Sparkles className="absolute -top-2 -right-2 text-primary animate-pulse" size={24} />
        </div>

        {/* النص */}
        <h1 className="text-4xl font-bold tracking-tighter uppercase italic mb-4 text-text-main">
          Ritual Completed
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">
          Your sacred order is being prepared
        </p>

        <div className="space-y-6 mb-12">
          <p className="text-sm text-text-muted leading-relaxed max-w-[300px] mx-auto">
            We’ve received your order and sent a confirmation to your email. Your pieces will reach you soon.
          </p>
          
          <div className="flex items-center justify-center gap-4 py-4 px-6 bg-background/50 rounded-2xl border border-border/30 w-fit mx-auto">
            <PackageCheck size={18} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-main">Order ID: #BOHO-7729</span>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex flex-col gap-4">
          <Link to="/products">
            <Button className="w-full py-7 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold gap-3 group">
              Continue Exploring <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/profile">
            <button className="text-[10px] uppercase tracking-widest font-bold text-text-muted hover:text-primary transition-colors py-2">
              Track your order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}