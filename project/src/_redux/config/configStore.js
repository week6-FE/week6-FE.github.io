import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../modules/postSlice";
import user from "../modules/signup";
import comment from "../modules/comment";

const store = configureStore({
  reducer: {
    user,
    posts: postReducer,
    comment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
