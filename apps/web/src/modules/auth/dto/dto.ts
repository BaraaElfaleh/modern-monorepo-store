// auth.types.ts
export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}