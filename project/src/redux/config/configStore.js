import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../modules/postSlice';

const store = configureStore({
    reducer: {
        // 객체의 key와 value 이름이 같으면 생략
        posts: postReducer
    },
})

export default store;