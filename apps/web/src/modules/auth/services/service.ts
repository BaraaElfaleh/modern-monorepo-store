import type { User } from "../types/type";

const BASE_URL = "https://dummyjson.com/auth";

export const AuthService = {
  async login(credentials: Record<string, string>): Promise<User> {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error("Invalid credentials");
    return res.json();
  },

  async getCurrentUser(token: string): Promise<User> {
    const res = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Session expired");
    return res.json();
  }
};