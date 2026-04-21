import { useState } from 'react';
import { useAuthContext } from '../context';
import { Button } from "../../../../../../packages/ui/src"; // تأكد من المسار الصحيح
import { User, Lock, ArrowRight } from 'lucide-react';

export const LoginForm = () => {
  const { login, loading } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-surface/40 backdrop-blur-xl rounded-[2.5rem] border border-border/50 shadow-soft animate-in fade-in zoom-in duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter uppercase italic text-primary mb-2">Welcome Back</h2>
        <p className="text-text-muted text-xs uppercase tracking-[0.2em] font-medium">Join the Boho Tribe</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username Field */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted ml-4">Username</label>
          <div className="relative group">
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-background/50 border border-border/50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-text-muted/30 text-sm"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-4">
            <label className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Password</label>
            <button type="button" className="text-[10px] uppercase tracking-widest font-bold text-primary hover:opacity-70 transition-opacity">Forgot?</button>
          </div>
          <div className="relative group">
            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background/50 border border-border/50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-text-muted/30 text-sm"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full py-7 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-elevated"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>

        <div className="pt-6 text-center">
          <p className="text-xs text-text-muted font-medium">
            Don't have an account? {' '}
            <button type="button" className="text-primary font-bold hover:underline underline-offset-4">Create Tribe Account</button>
          </p>
        </div>
      </form>
    </div>
  );
};