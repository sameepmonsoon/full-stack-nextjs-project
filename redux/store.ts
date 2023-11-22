import { configureStore } from "@reduxjs/toolkit";

import globalStateReducer from "./commonState/globalState";

export const store = configureStore({
  reducer: { global: globalStateReducer },
});
