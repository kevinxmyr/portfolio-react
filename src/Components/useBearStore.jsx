import { create } from 'zustand';

export const useBearStore = create((set) => ({
  bears: 0,

  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),

  decreasePopulation: () => set((state) => ({bears: state.bears - 1})),
  
  reset: () => set((state) => ({bears: state.bears = 0}))
}));

// https://www.youtube.com/watch?v=KCr-UNsM3vA