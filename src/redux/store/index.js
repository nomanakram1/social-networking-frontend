import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/app/app.slice";
import feedSlice from "../features/feed/feedSlice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [feedSlice.name]: feedSlice.reducer,
  },
});
