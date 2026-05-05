import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { User, AuthContextType } from "./types/type";
import { AuthService } from "./services/service";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("auth_user");
      // تأكد من أن البيانات موجودة وصحيحة
      if (savedUser && savedUser !== "undefined") {
        try {
          return JSON.parse(savedUser);
        } catch { return null; }
      }
    }
    return null;
  });

  // اجعل التحميل false إذا كان المستخدم موجوداً لتتمكن من العبور فوراً
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("auth_user"); 
    }
    return true;
  });

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const userData = await AuthService.getCurrentUser(token);
        // تحديث البيانات دون المساس بالتوكن الموجود
        const updatedUser = { ...userData, token }; 
        localStorage.setItem("auth_user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      } catch {
        // لا تخرج المستخدم إلا إذا كان التوكن تالفاً فعلاً
        // logout(); 
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (u: string, p: string) => {
    setIsLoading(true);
    try {
      const response = await AuthService.login({ username: u, password: p });

     const responseData = response as any; // تجاوز مؤقت للنوع
if (responseData && (responseData.token || responseData.accessToken)) {
  const token = responseData.token || responseData.accessToken;
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_user", JSON.stringify(responseData));
  setUser(responseData);
}
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ... (logout كما هو)

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
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