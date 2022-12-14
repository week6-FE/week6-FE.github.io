import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DATA_URL = "http://15.164.234.179/";

const register = (payload) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const frm = new FormData();
  frm.append("title", payload.title);
  frm.append("content", payload.content);
  frm.append("file", payload.file);
  axios
    .post("http://15.164.234.179/api/post", frm, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function a(response) {
      alert("게시되었습니다.");
      window.location.replace("/");
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const __getBoard = createAsyncThunk(
  "post/getBoard",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${DATA_URL}api/post`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetailBoard = createAsyncThunk(
  "get/getDetailBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${DATA_URL}api/post/${payload.id}`);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [
    {
      content: "",
      file: "",
      title: "",
    },
  ],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // action => dispatch로 보낸 데이터를 받아오는 곳
    addPost: (state, action) => {
      state.posts = action.payload;
      register(action.payload);
    },
  },
  extraReducers: {
    [__getBoard.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [__getDetailBoard.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
