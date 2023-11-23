import { create } from "zustand";
type Store = {
  isSiderOpen: boolean;
  setIsSiderOpen: () => void;
};
export const useLeftSiderState = create<Store>((set) => ({
  isSiderOpen: false,
  setIsSiderOpen: () =>
    set((state: any) => ({ isSiderOpen: !state.isSiderOpen })),
}));
