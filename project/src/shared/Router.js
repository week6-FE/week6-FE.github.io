import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import Post from '../pages/Post';
import PostDetail from "../pages/PostDetail";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 메인페이지 */}
                <Route path="/" element={<Main />} />
                {/* 게시글 작성 페이지 */}
                <Route path="post" element={<Post />} />
                {/* 게시글 상세 페이지 */}
                <Route path="post/:id" element={<PostDetail />} />
                {/* 로그인 페이지 */}
                <Route path="login" element={<Login />} />
                {/* 회원가입 페이지 */}
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;