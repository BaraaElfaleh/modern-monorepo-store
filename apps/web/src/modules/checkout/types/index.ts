export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface PaymentDetails {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface CheckoutState {
  address: ShippingAddress;
  payment: PaymentDetails;
  step: 'shipping' | 'payment' | 'review';
}