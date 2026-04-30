import { CreditCard, ArrowLeft, ArrowRight, ShieldCheck, Loader2, ShoppingBag } from 'lucide-react';
import { Button } from "./../../../../packages/ui/src";

// تعريف الـ Props لتمرير البيانات من الراوتر أو الـ Context
interface CheckoutPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any;
  cart: any;
  totalAmount: number;
  isPending: boolean;
  nextStep: () => void;
  prevStep: () => void;
  setAddress: (address: any) => void;
  setPayment: (payment: any) => void;
  handleFinalSubmit: () => void;
}

export function CheckoutPage({
  state, cart, totalAmount, isPending,
  nextStep, prevStep, setAddress, setPayment, handleFinalSubmit
}: CheckoutPageProps) {

  // تأمين الرندر
  if (!cart || !cart.items) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-primary mb-4" size={32} />
        <p className="uppercase tracking-[0.2em] text-[10px] font-bold">Summoning your items...</p>
      </div>
    );
  }

  // حالة السلة الفارغة
  if (cart.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-surface/50 rounded-3xl flex items-center justify-center border border-border/50 backdrop-blur-sm">
          <ShoppingBag className="text-text-muted/50" size={32} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tighter uppercase italic">Your Sanctuary is Empty</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">No sacred pieces found to checkout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-10 pb-20 px-[6%]">
      <div className="max-w-6xl mx-auto">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-16 max-w-md mx-auto">
          {['shipping', 'payment', 'review'].map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-3 relative flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 
                ${state.step === s ? 'bg-primary border-primary text-white shadow-elevated scale-110' : 'bg-surface border-border text-text-muted'}`}>
                {i + 1}
              </div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${state.step === s ? 'text-primary' : 'text-text-muted'}`}>
                {s}
              </p>
              {i < 2 && <div className="absolute top-5 left-1/2 w-full h-0.5 bg-border z-0" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface/40 backdrop-blur-xl border border-border/50 p-10 rounded-[3rem] shadow-soft">
              
              {/* Shipping Step */}
              {state.step === 'shipping' && (
                <div className="animate-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Shipping Ritual</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Full Name</label>
                      <input 
                        type="text" 
                        value={state?.address?.fullName || ''}
                        onChange={(e) => setAddress({ ...state.address, fullName: e.target.value })}
                        className="w-full bg-background/50 border border-border rounded-2xl p-4 outline-none focus:border-primary/50 transition-all text-sm" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-2">Sacred Address</label>
                      <input 
                        type="text" 
                        value={state?.address?.address || ''}
                        onChange={(e) => setAddress({ ...state.address, address: e.target.value })}
                        className="w-full bg-background/50 border border-border rounded-2xl p-4 outline-none focus:border-primary/50 transition-all text-sm" 
                        placeholder="Street, building, etc." 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Step */}
              {state.step === 'payment' && (
                <div className="animate-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Sacred Payment</h2>
                  <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 mb-8 flex items-center gap-4">
                    <ShieldCheck className="text-primary" size={24} />
                    <p className="text-xs font-medium text-primary/80">Your transaction is protected by high-level encryption.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                      <input 
                        type="text" 
                        value={state?.payment?.cardNumber || ''}
                        onChange={(e) => setPayment({ ...state.payment, cardNumber: e.target.value })}
                        className="w-full bg-background/50 border border-border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 transition-all text-sm" 
                        placeholder="Card Number" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Review Step */}
              {state.step === 'review' && (
                <div className="animate-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-bold tracking-tighter uppercase italic mb-8">Final Review</h2>
                  <div className="space-y-4 text-sm">
                    <div className="p-6 bg-background/30 rounded-2xl border border-dashed border-border">
                      <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-2">Deliver To</p>
                      <p className="font-medium text-text-main">{state?.address?.fullName}</p>
                      <p className="text-text-muted">{state?.address?.address}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border/50">
                <button 
                  onClick={prevStep} 
                  disabled={state.step === 'shipping' || isPending}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest disabled:opacity-0 transition-all hover:text-primary text-text-muted"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <Button 
                  onClick={state.step === 'review' ? handleFinalSubmit : nextStep} 
                  disabled={isPending}
                  className="rounded-2xl px-10 py-6 text-[10px] uppercase tracking-[0.2em] font-bold gap-3 min-w-45"
                >
                  {isPending ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : state.step === 'review' ? (
                    'Complete Ritual'
                  ) : (
                    <>Continue <ArrowRight size={14} /></>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface/60 backdrop-blur-md border border-border/50 p-8 rounded-[2.5rem] sticky top-10 shadow-soft">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 border-b border-border/50 pb-4 text-text-main">Order Summary</h3>
              <div className="space-y-4 mb-8 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
                {cart.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="space-y-1">
                      <p className="text-text-main font-medium leading-tight">{item.title || item.name}</p>
                      <p className="text-[10px] text-text-muted uppercase tracking-widest">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-text-main">${((item.price || 0) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-border/50">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  <p>Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-primary font-black">
                  <p>Shipping</p>
                  <p>Sacred Free</p>
                </div>
                <div className="flex justify-between text-2xl font-bold tracking-tighter italic pt-4 text-text-main">
                  <p>Total</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}