import { create } from 'zustand';

interface AppStore {
  mobileMenuOpen: boolean;

  setMobileMenuOpen: (
    value: boolean
  ) => void;
}

export const useAppStore = create<AppStore>(
  (set) => ({
    mobileMenuOpen: false,

    setMobileMenuOpen: (value) =>
      set({
        mobileMenuOpen: value,
      }),
  })
);