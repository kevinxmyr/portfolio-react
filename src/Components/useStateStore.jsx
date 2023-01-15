import { create } from 'zustand';

export const useStateStore = create((set) => ({
  screenWidth: window.innerHeight,
  updateScreenWidth: () =>
    set((state) => ({ screenWidth: state.screenWidth = window.innerWidth })),
}));
