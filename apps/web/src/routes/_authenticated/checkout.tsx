import { useCheckout } from "../../modules/checkout/context";
import { useCreateOrder } from "../../modules/checkout/hooks/useCreateOrder";
import { useCartContext } from "../../modules/cart";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { createFileRoute, Outlet, } from "@tanstack/react-router";

// ملاحظة: تم حذف السلاش الأخيرة من المسار ليتطابق مع الـ routeTree.gen.ts
export const Route = createFileRoute("/_authenticated/checkout")({
  component: CheckoutRouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
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

  // خلاف ذلك، اعرض صفحة الـ Checkout العادية
  return (
    <>
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
      {/* احتياطياً في حال أردت عرض النجاح كـ Modal أو جزء من الصفحة */}
      <Outlet />
    </>
  );
}
