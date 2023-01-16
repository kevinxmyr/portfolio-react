import { create } from 'zustand';

export const useStateStore = create((set) => ({
  screenWidth: screen.width,
  updateScreenWidth: () =>
    set((state) => ({ screenWidth: state.screenWidth = screen.width })),
}));


// https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working