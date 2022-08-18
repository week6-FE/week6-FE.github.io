import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../modules/postSlice";
import user from "../modules/signup";

const store = configureStore({
  reducer: {
    user,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
