import { createFileRoute, useNavigate, Outlet, useLocation } from '@tanstack/react-router'
import { useAuth } from '../../modules/auth'
import { useEffect } from 'react'

export const Route = createFileRoute('/_authenticated/_authenticated')({
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {

    if (!isLoading && !isAuthenticated) {
      navigate({
        to: '/login',
        search: { 

          redirect: location.pathname 
        },
      })
    }
  }, [isAuthenticated, isLoading, navigate, location.pathname])

  // شاشة التحميل (Boho Loader)
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <div className="w-12 h-12 border-2 border-primary/10 border-t-primary rounded-full animate-spin mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary animate-pulse">
          Authenticating Soul...
        </p>
      </div>
    )
  }

  // إذا كان المستخدم مسجلاً، نعرض الـ Outlet، وإلا نمنع الرندر لحين التحويل
  return isAuthenticated ? <Outlet /> : null
}