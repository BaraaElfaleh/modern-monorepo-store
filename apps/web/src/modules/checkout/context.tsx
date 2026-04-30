import { createContext, useContext, useState, type ReactNode } from "react";
import type { ShippingAddress, PaymentDetails, CheckoutState } from "./types/index";

interface CheckoutContextType {
  state: CheckoutState;
  setAddress: (address: ShippingAddress) => void;
  setPayment: (payment: PaymentDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<CheckoutState>({
    address: { fullName: '', address: '', city: '', postalCode: '', country: '' },
    payment: { cardHolder: '', cardNumber: '', expiryDate: '', cvv: '' },
    step: 'shipping'
  });

  const setAddress = (address: ShippingAddress) => setState(prev => ({ ...prev, address }));
  const setPayment = (payment: PaymentDetails) => setState(prev => ({ ...prev, payment }));
  
  const nextStep = () => {
    if (state.step === 'shipping') setState(prev => ({ ...prev, step: 'payment' }));
    else if (state.step === 'payment') setState(prev => ({ ...prev, step: 'review' }));
  };

  const prevStep = () => {
    if (state.step === 'payment') setState(prev => ({ ...prev, step: 'shipping' }));
    else if (state.step === 'review') setState(prev => ({ ...prev, step: 'payment' }));
  };

  return (
    <CheckoutContext.Provider value={{ state, setAddress, setPayment, nextStep, prevStep }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used within CheckoutProvider");
  return context;
};