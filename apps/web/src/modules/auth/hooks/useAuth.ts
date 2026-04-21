// auth.hooks.ts
import { useState } from 'react';
import { AuthAPI } from '../services/service';
import type { User, LoginPayload } from '../dto/dto';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const [loading, setLoading] = useState(false);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    try {
      const user = await AuthAPI.login(payload);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout, loading };
};