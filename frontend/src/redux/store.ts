import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./sliceUser";

export const store = configureStore({
  reducer: userSlice,
});
