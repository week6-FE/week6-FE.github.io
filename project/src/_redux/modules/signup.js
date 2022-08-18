import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

const DATA_URL = "http://15.164.234.179/";

export const __postUser = createAsyncThunk(
  "user/postUser",
  async (registerUser, thunkAPI) => {
    try {
      const data = await axios.post(
        `${DATA_URL}api/member/signup`,
        registerUser
      );
      if (registerUser.password !== registerUser.ConfirmPassword) {
        return alert("비밀번호가 일치하지 않습니다");
      }
      if (data.status === 200 || data.status === 201) {
        alert("회원가입이 완료되었습니다");
        window.location.replace("/login");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (registerUser.nickname.length === 0) {
        return alert("닉네임을 입력해주세여");
      } else if (registerUser.loginId.length === 0) {
        return alert("아이디를 입력해주세여");
      } else if (registerUser.password.length === 0) {
        return alert("비밀번호를 입력해주세여");
      } else if (error.response.status === 409) {
        alert("닉네임 또는 아이디가 중복되었습니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// thunk랑 reducer 혼용 사용 조건

export const __postLoginUser = createAsyncThunk(
  "user/postLoginUser",
  async (loginUser, thunkAPI) => {
    try {
      const response = await axios.post(
        `${DATA_URL}api/member/login`,
        loginUser
      );
      const accessToken = response.headers.authorization;
      const refreshToken = response.headers["refresh-token"];
      if (response.status === 200 || response.status === 201) {
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        window.localStorage.setItem("nickname", response.data.data.nickname);
        alert("로그인 성공");
        window.location.replace("/");
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      if (400 < error.response.status && error.response.status < 500) {
        window.location.reload();
        alert("로그인 실패");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [__postUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [__postLoginUser.fulfilled]: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export default userSlice.reducer;
