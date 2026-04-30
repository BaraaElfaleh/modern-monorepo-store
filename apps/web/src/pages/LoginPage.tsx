import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "../modules/auth";
import { ArrowRight, Lock, User, Sparkles } from "lucide-react";

// استقبلنا الـ navigate و الـ redirect كـ props لجعل المكون "غبي" (Pure UI)
interface LoginPageProps {
  onSuccess: (redirect: string) => void;
  redirect: string;
}

export function LoginPage({ onSuccess, redirect }: LoginPageProps) {
  const { login } = useAuth();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(username, password);
      onSuccess(redirect);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="bg-surface/40 backdrop-blur-xl border border-border p-8 rounded-[2.5rem] shadow-soft relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-surface-muted border border-border mb-4 animate-bounce-slow">
              <Sparkles className="text-primary w-8 h-8" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter italic uppercase mb-2">Welcome Back</h1>
            <p className="text-text-muted text-xs uppercase tracking-[0.2em] font-light">Access your sacred collection</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold uppercase tracking-widest text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold ml-2 text-text-muted">Identity</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full bg-surface-muted/50 border border-border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold ml-2 text-text-muted">Secret Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-surface-muted/50 border border-border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-elevated disabled:opacity-50 mt-4"
            >
              {isLoading ? "Synchronizing..." : "Enter Session"}
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <p className="text-center mt-8 text-[10px] text-text-muted uppercase tracking-widest">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-primary font-bold hover:underline transition-all"
            >
              Join the Tribe
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}