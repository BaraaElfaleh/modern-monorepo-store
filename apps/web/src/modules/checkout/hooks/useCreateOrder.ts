import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCart } from "../../cart";

export const useCreateOrder = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); // لنقوم بتصفير السلة بعد نجاح الطلب

  return useMutation({
    mutationFn: async (orderData: any) => {
      // محاكاة الاتصال بالـ API
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Order Sent to Boho Servers:", orderData);
          resolve({ success: true, orderId: Math.floor(Math.random() * 100000) });
        }, 2000);
      });
    },
    onSuccess: (data: any) => {
      // 1. مسح السلة
      clearCart();
      // 2. التوجه لصفحة "شكراً لك" أو النجاح
      navigate({ to: "/checkout/success", search: { id: data.orderId } });
    },
  });
};