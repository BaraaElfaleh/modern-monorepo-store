import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // أو Spinner بتصميم Boho
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};