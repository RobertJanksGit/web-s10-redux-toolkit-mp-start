// ✨ create your `store` in this module
import { configureStore } from "@reduxjs/toolkit";
import slice from "./quotesSlice";

export const store = configureStore({
  reducer: {
    state: slice,
  },
});
