import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __postUser } from "../_redux/modules/signup";

// 회원가입 page
const SignUp = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [loginId, setloginId] = useState("");
  const [password, setpassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeloginId = (e) => {
    setloginId(e.target.value);
  };

  const onChangepassword = (e) => {
    setpassword(e.target.value);
  };

  const onChangeConfimPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChagneUser = (e) => {
    e.preventDefault();
    dispatch(__postUser(registerUser));
    if (password !== ConfirmPassword) {
      setConfirmPassword("");
      return alert("비밀번호가 일치하지 않습니다");
    }
    if (nickname.length === 0) {
      return alert("닉네임을 입력해주세여");
    } else if (loginId.length === 0) {
      return alert("아이디를 입력해주세여");
    } else if (password.length === 0) {
      return alert("비밀번호를 입력해주세여");
    } else {
      alert("회원가입이 완료되었습니다");
      navigation("/login");
    }
  };

  let registerUser = { nickname, loginId, password };

  return (
    <>
      <form onSubmit={handleChagneUser}>
        {/* 닉네임 */}
        <div>
          <span>닉네임</span>
          <input required onChange={onChangeNickname} value={nickname} />
        </div>
        {/* id */}
        <div>
          <span>이름</span>
          <input required onChange={onChangeloginId} value={loginId} />
        </div>
        {/* 비밀번호 */}
        <div>
          <span>비밀번호</span>
          <input
            required
            type="password"
            onChange={onChangepassword}
            value={password}
          />
        </div>
        {/* 비밀번호 확인 */}
        <div>
          <span>비밀번호 확인</span>
          <input
            required
            type="password"
            onChange={onChangeConfimPassword}
            value={ConfirmPassword}
          />
        </div>
        <button>제출</button>
        {nickname}
        {loginId}
      </form>
    </>
  );
};

export default SignUp;
