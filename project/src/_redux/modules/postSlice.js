import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    // axios({
    //     method: 'post',
    //     url: 'http://15.164.234.179/api/post',
    //     headers: { "Authorization": accessToken, "Refresh-Token": refreshToken, 'Content-Type': 'multipart/form-data' },
    //     data: frm
    // })
    .then(function a(response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

const initialState = {
  posts: [
    {
      title: "",
      content: "",
      file: "",
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
      console.log(action.payload);
      register(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
