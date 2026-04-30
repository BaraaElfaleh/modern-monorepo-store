import { createFileRoute } from '@tanstack/react-router';
import { useCheckout } from '../../../modules/checkout/context';
import { useCreateOrder } from '../../../modules/checkout/hooks/useCreateOrder';
import { useCartContext } from '../../../modules/cart';
import { CheckoutPage } from '../../../pages/CheckoutPage';

// ملاحظة: تم حذف السلاش الأخيرة من المسار ليتطابق مع الـ routeTree.gen.ts
export const Route = createFileRoute('/_authenticated/checkout/')({
  component: CheckoutRouteComponent,
});

function CheckoutRouteComponent() {
  const { state, nextStep, prevStep, setAddress, setPayment } = useCheckout();
  const { cart, totalAmount } = useCartContext(); 
  const { mutate: createOrder, isPending } = useCreateOrder();

  const handleFinalSubmit = () => {
    createOrder({
      items: cart.items,
      shipping: state.address,
      payment: "Credit Card",
      total: totalAmount,
    });
  };

  return (
    <CheckoutPage 
      state={state}
      cart={cart}
      totalAmount={totalAmount}
      isPending={isPending}
      nextStep={nextStep}
      prevStep={prevStep}
      setAddress={setAddress}
      setPayment={setPayment}
      handleFinalSubmit={handleFinalSubmit}
    />
  );
}