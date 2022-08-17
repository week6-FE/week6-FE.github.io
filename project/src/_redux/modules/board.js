import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://reactteamproject.herokuapp.com/todos"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async (inputData, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todos", inputData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__postTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export default todosSlice.reducer;
