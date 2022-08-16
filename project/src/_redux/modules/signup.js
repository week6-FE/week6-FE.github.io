import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

const DATA_URL = "http://15.164.234.179/";
const DATA_URL2 = "http://localhost:3001/";

export const __postUser = createAsyncThunk(
  "user/postUser",
  async (registerUser, thunkAPI) => {
    try {
      const data = await axios.post(
        `${DATA_URL}api/member/signup`,
        registerUser
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("닉네임 또는 아이디가 중복되었습니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getLoginUser = createAsyncThunk(
  "user/getLoginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios
        .get(`${DATA_URL}api/member/login`)
        .then((response) => {
          console.log(response);
        });
      console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLoginUser = createAsyncThunk(
  "user/postLoginUser",
  async (loginUser, thunkAPI) => {
    try {
      const data = await axios
        .post(`${DATA_URL}api/member/login`, loginUser)
        // .post(`${DATA_URL2}user`, loginUser)
        .then((response) => {
          const accessToken = response.headers.authorization;
          const refreshToken = response.headers["refresh-token"];
          if (response.status === 200 || response.status === 201) {
            // console.log(response);
            window.localStorage.setItem("accessToken", accessToken);
            window.localStorage.setItem("refreshToken", refreshToken);
            alert("로그인 성공");
            // window.location.replace("/");
            return thunkAPI.fulfillWithValue(data.data);
          }
        });
    } catch (error) {
      if (400 < error.response.status && error.response.status < 500) {
        window.location.reload();
        alert("실패");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    // [__getLoginUser.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [__getLoginUser.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // console.log(action.payload);
      state.user = action.payload;
      console.log(action.payload);
    },
    // [__getLoginUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [__postUser.fulfilled]: (state, action) => {
      state.user.push(action.data);
      console.log(state);
    },
    [__postLoginUser.fulfilled]: (state, action) => {
      console.log("aaaa");
      // state.user.push(action.payload);
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
