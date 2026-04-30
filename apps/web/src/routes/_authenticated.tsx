import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

// 1. المكون (Layout) يُعرف هنا
export function AuthenticatedLayout() {
  return (
    <div className="authenticated-layout">
      {/* هنا يمكنك وضع Navbar خاص بالمستخدم المسجل فقط */}
      <Outlet /> {/* هذا المكان الذي ستظهر فيه صفحة الـ Checkout أو الـ Wishlist */}
    </div>
  )
}

// 2. تعريف المسار (Route Definition) يأتي بعد المكون
export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    // التحقق من أن المستخدم ليس في حالة تحميل (Loading) وهو غير مسجل
    if (!context.auth.isLoading && !context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AuthenticatedLayout,
})