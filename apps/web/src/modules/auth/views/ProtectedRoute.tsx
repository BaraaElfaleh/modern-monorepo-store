import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from '@tanstack/react-router';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // أو Spinner بتصميم Boho
return isAuthenticated ? <Outlet /> : <Navigate to="/login" search={{ redirect: location.pathname } as any} />;
};