import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor";
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  // Auth actions
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;
  clearError: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isLoading: false,
        error: null,

        setUser: (user) => set({ user }),
        setToken: (token) => set({ token }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
        clearError: () => set({ error: null }),

        logout: () => {
          set({
            user: null,
            token: null,
            isLoading: false,
            error: null,
          });
        },

        isAuthenticated: () => {
          const { token } = get();
          return !!token;
        },
      }),
      {
        name: "auth-store",
        getStorage: () => localStorage,
      },
    ),
    { name: "AuthStore" },
  ),
);
