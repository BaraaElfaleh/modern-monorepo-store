import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { User, AuthContextType } from "./types/type";
import { AuthService } from "./services/service";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        // نستخدم getCurrentUser بدل me
        const userData = await AuthService.getCurrentUser(token);
        setUser(userData);
      } catch {
        localStorage.removeItem("auth_token");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);
  const login = async (u: string, p: string) => {
  setIsLoading(true); // اختياري: لإظهار اللودر أثناء التحقق
  try {
    const userData = await AuthService.login({ username: u, password: p });
    
    // تأكد أن الـ userData يحتوي على الـ token، واحفظه فوراً
    if (userData.token) {
      localStorage.setItem("auth_token", userData.token);
    }
    
    setUser(userData);
  } finally {
    setIsLoading(false);
  }
};

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const useAuthContext = useAuth;