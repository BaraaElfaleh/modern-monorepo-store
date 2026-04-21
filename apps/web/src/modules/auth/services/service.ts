// auth.api.ts
import type { LoginPayload, User } from '../dto/dto';

export const AuthAPI = {
  async login(payload: LoginPayload): Promise<User> {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await res.json();

    return {
      id: data.id,
      username: data.username,
      email: data.email,
      token: data.token,
    };
  },
};