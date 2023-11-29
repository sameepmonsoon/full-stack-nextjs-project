import { create } from "zustand";
type Store = {
  siderState: number;
  setSiderState: () => void;
};
export const useLeftSiderState = create<Store>((set) => ({
  siderState: 0,
  setSiderState: () =>
    set((state: any) => ({ siderState: (state.siderState + 1) % 3 })),
  closeSider: () => set((state: any) => ({ siderState: 2 })),
}));
