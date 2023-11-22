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
    openSideDrawer: () => {},
  },
});

export const { openSideDrawer } = globalState.actions;

export default globalState.reducer;
