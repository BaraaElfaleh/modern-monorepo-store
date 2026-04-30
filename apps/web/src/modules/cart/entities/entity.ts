// /src/modules/cart/entities/entity.ts

export interface CartItem {
  productId: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  total: number;
}

// تأكد أن كلمة export موجودة هنا قبل كلمة interface
export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}