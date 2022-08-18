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
        // `${DATA_URL2}user`,
        registerUser
      );
      if (registerUser.nickname.length === 0) {
        return alert("닉네임을 입력해주세여");
      } else if (registerUser.loginId.length === 0) {
        return alert("아이디를 입력해주세여");
      } else if (registerUser.password.length === 0) {
        return alert("비밀번호를 입력해주세여");
      } else {
        alert("회원가입이 완료되었습니다");
        // window.location.replace("/login");
      }
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("닉네임 또는 아이디가 중복되었습니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __getLoginUser = createAsyncThunk(
//   "user/getLoginUser",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `${DATA_URL}api/post`
//         // `${DATA_URL2}user`
//       );
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// thunk랑 reducer 혼용 사용 조건

export const __postLoginUser = createAsyncThunk(
  "user/postLoginUser",
  async (loginUser, thunkAPI) => {
    try {
      const response = await axios.post(
        `${DATA_URL}api/member/login`,
        // `${DATA_URL2}user`,
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
      console.log(response);
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
      // console.log(action.payload);
    },
    [__postLoginUser.fulfilled]: (state, action) => {
      // state.user.push(action.payload);
      // console.log(action.payload);
      state.user.push(action.payload);
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
