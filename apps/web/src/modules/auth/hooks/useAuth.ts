import { useState, useEffect } from "react";
import type { User } from "../types/type";
import { AuthService } from "../services/service";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          const data = await AuthService.getCurrentUser(token);
          setUser(data);
        } catch {
          localStorage.removeItem("auth_token");
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (credentials: Record<string, string>) => {
    const data = await AuthService.login(credentials);
    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      setUser(data);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
};