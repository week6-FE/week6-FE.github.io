import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/signup";

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
