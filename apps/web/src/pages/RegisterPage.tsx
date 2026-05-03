import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Lock, User, Moon, Sparkles } from "lucide-react";

interface RegisterPageProps {
  onSuccess: () => void;
}

export function RegisterPage({ onSuccess }: RegisterPageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة عملية التسجيل
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

        <div className="bg-surface/40 backdrop-blur-2xl border border-border/50 p-10 rounded-[3rem] shadow-soft relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Moon className="text-primary w-6 h-6" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter italic uppercase">Join the Tribe</h1>
            <p className="text-text-muted text-[10px] uppercase tracking-[0.3em] font-light mt-2">Begin your aesthetic journey</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold ml-2 text-text-muted">Full Identity</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input type="text" placeholder="Your Name" className="w-full bg-surface-muted/30 border border-border/50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold ml-2 text-text-muted">Digital Mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input type="email" placeholder="email@boho.com" className="w-full bg-surface-muted/30 border border-border/50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold ml-2 text-text-muted">Secret Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input type="password" placeholder="••••••••" className="w-full bg-surface-muted/30 border border-border/50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm" required />
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:shadow-elevated hover:-translate-y-0.5 transition-all disabled:opacity-50 mt-6">
              {isLoading ? <Sparkles className="animate-spin w-4 h-4" /> : <>Create Account <ArrowRight size={14} /></>}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-[10px] text-text-muted uppercase tracking-widest">
              Already part of the tribe?{" "}
              <Link to="/login" search={{ redirect: "/" } as any} className="text-primary font-black hover:underline cursor-pointer">Enter Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}