import { create } from "zustand";
interface AuthState {
  isLoggedIn: boolean;

  setIsLoggedIn: (value: boolean) => void;
}
export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));