import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
  isOpen: boolean;
};
const initialState: initialStateTypes = {
  isOpen: false,
};
export const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    openSideDrawer: (state: any, payload: any): any => {
      return (state.isOpen = payload);
    },
  },
});

export const { openSideDrawer } = globalState.actions;

export default globalState.reducer;
