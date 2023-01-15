import { create } from 'zustand';

export const useStateStore = create((set) => ({
  screenWidth: window.innerWidth,
  addScreenWidth: () =>
    set((state) => ({ screenWidth: (e) =>  state.screenWidth = e.target.value})),
}));
