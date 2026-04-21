// auth.context.tsx
import { createContext, useContext } from 'react';
import { useAuth } from './hooks/useAuth';

const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthProvider missing');
  return ctx;
};