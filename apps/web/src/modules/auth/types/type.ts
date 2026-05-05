export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  avatar?: string;      // أضف هذا
  token?: string;       
  accessToken?: string; // أضف هذا
  city?: string;        // أضف هذا
  address?: {           // أضف هذا
    city: string;
  };
}
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}