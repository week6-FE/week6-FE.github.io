import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/signup";
import todos from "../modules/board";

const store = configureStore({
  reducer: {
    user,
    // todos,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
