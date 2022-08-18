import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DATA_URL = "http://15.164.234.179/";

export const __postComments = createAsyncThunk(
  "comments/postComments",
  async (commentData, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    try {
      const data = await axios.post(
        `${DATA_URL}api/comment/${commentData.state.id}`,
        commentData.content,
        {
          headers: {
            Authorization: accessToken,
            "Refresh-Token": refreshToken,
          },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [__postComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      console.log(action);
    },
  },
});

export default commentsSlice.reducer;
