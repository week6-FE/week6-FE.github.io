import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __postUser } from "../_redux/modules/signup";
import Header from "../components/Header";

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
  };

  let registerUser = { nickname, loginId, password };

  return (
    <>
      <Header />
      <Title>Sign up</Title>
      <InputWrap>
        <form onSubmit={handleChagneUser}>
          {/* 닉네임 */}
          <InputText
            placeholder="닉네임"
            required
            onChange={onChangeNickname}
            value={nickname}
          />
          {/* id */}
          <InputText
            placeholder="아이디"
            required
            onChange={onChangeloginId}
            value={loginId}
          />
          {/* 비밀번호 */}
          <InputText
            placeholder="비밀번호"
            required
            type="password"
            onChange={onChangepassword}
            value={password}
          />
          {/* 비밀번호 확인 */}
          <InputText
            placeholder="비밀번호 확인"
            required
            type="password"
            onChange={onChangeConfimPassword}
            value={ConfirmPassword}
          />
          <SubmitBtn onClick={handleChagneUser}>제출</SubmitBtn>
        </form>
      </InputWrap>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #63a1ff;
  margin-bottom: 60px;
`;

const InputWrap = styled.div`
  width: 376px;
  margin: 0 auto;
`;

const InputText = styled.input`
  width: 376px;
  padding: 12px 16px;
  border: 1px solid #63a1ff;
  margin-bottom: 24px;
  ::placeholder {
    color: #b1d0ff;
  }
`;

const SubmitBtn = styled.div`
  width: 376px;
  padding: 12px 0;
  text-align: center;
  background-color: #63a1ff;
  color: #fff;
  cursor: pointer;
`;

export default SignUp;
