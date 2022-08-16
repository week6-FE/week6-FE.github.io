import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { __postLoginUser } from "../_redux/modules/signup";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 100px 250px;
  /* background: #e8cbc0;
  background: -webkit-linear-gradient(to right, #636fa4, #e8cbc0);
  background: linear-gradient(to right, #636fa4, #e8cbc0); */
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 10px 6px 10px rgba(85, 84, 84, 0.8);
`;

const LoginTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  border-right: 3px solid black;
  padding: 10px;
  background-color: #141114;
  background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  letter-spacing: 10px;
  position: relative;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const flicker = keyframes`
 from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }
`;

const shine = keyframes`
0% {
    color: #6b1839;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #7096ac,
      -0.2rem 0.1rem 1rem #7096ac, 0.2rem 0.1rem 1rem #7096ac,
      0 -0.5rem 2rem #115881, 0 0.5rem 3rem #115881;
  }
`;

const blink = keyframes`
0%,
  22%,
  36%,
  75% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #7096ac,
      -0.2rem 0.1rem 1rem #7096ac, 0.2rem 0.1rem 1rem #7096ac,
      0 -0.5rem 2rem #115881, 0 0.5rem 3rem #115881;
  }
  28%,
  33% {
    color: #7096ac;
    text-shadow: none;
  }
  82%,
  97% {
    color: #115881;
    text-shadow: none;
  }
`;

const LoginTitleInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background-image: radial-gradient(
    ellipse 50% 35% at 50% 50%,
    #3a68a3,
    transparent
  );
  letter-spacing: 2;
  font-family: "Clip";
  text-transform: uppercase;
  color: #ffe6ff;
  text-shadow: 0 0 0.6rem #e6f3ff, 0 0 1.5rem #7096ac,
    -0.2rem 0.1rem 1rem #7096ac, 0.2rem 0.1rem 1rem #7096ac,
    0 -0.5rem 2rem #115881, 0 0.5rem 3rem #115881;
  animation: ${shine} 2s forwards, ${flicker} 3s forwards;
  .nth-1 {
    animation: ${shine} 2s forwards, ${blink} 4s 2s forwards;
    animation-delay: 0.5s;
  }
  .nth-4 {
    animation: ${shine} 2s forwards, ${blink} 10s 1s forwards;
    transform: translate(-60%, -60%);
    display: flex;
    font-size: 5em;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .nth-5 {
    animation: ${shine} 2s forwards, ${blink} 10s 1s forwards;
    transform: translate(-50%, -50%);
    display: flex;
    font-size: 12em;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0px 0 0 60px;
    border: 7px solid rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
`;

const LoginTitle = styled.span`
  font-weight: 600;
  font-size: 3em;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: -100px;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 20px;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;
  }
  label::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid rgba(105, 171, 224, 1);
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  }
  .content-name {
    position: absolute;
    bottom: 0px;
    left: 0px;
    transition: all 0.3s ease;
  }
`;

const LoginInput = styled.input`
  width: 95%;
  height: 100%;
  color: black;
  padding-top: 20px;
  border: none;
  background-color: transparent;
  padding-left: 40px;
  font-size: 0.9em;
  &:focus {
    outline: none;
  }
  &:focus + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    left: 0px;
    color: rgba(105, 171, 224, 1);
  }
  &:focus + .label-name::after {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const LoginButton = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background: white;
  border-radius: 10px;
  border: 1px solid rgba(105, 171, 224, 1);
  box-shadow: 5px 5px 0 rgba(105, 171, 224, 1),
    -5px -5px 0 rgba(105, 171, 224, 1), -5px 5px 0 rgba(105, 171, 224, 1),
    5px -5px 0 rgba(105, 171, 224, 1);
  transition: 500ms ease-in-out;
  margin: 20px;
  &:hover {
    box-shadow: 20px 5px 0 rgba(105, 171, 224, 1),
      -20px -5px 0 rgba(105, 171, 224, 1);
  }
  &:focus {
    outline: none;
  }
`;

const MainButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px gray;
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = (e) => {
    setloginId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleLogin(e) {
    e.preventDefault();
    dispatch(__postLoginUser(loginUser));
  }

  function moveMain() {
    console.log("onclick");
    navigate("/");
  }

  function moveSignUp() {
    navigate("/signup");
  }

  const loginUser = { loginId, password };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginTitleContainer>
            <LoginTitleInnerWrapper>
              <LoginTitle className="nth-1">또</LoginTitle>
              <LoginTitle className="nth-2">스타그램</LoginTitle>
              <LoginTitle className="nth-4">☆</LoginTitle>
              <LoginTitle className="nth-5">
                <div style={{ transform: "rotate(35deg)" }}>☽</div>
              </LoginTitle>
            </LoginTitleInnerWrapper>
          </LoginTitleContainer>
          <FormContainer>
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                margin: "20px",
              }}
            >
              <MainButton onClick={moveMain}>Main Page</MainButton>
            </div>
            <span style={{ fontSize: "40px", fontWeight: "600" }}>Login</span>
            <FormInnerWrapper>
              <LoginForm onSubmit={handleLogin}>
                <LoginInputWrapper>
                  <LoginInput
                    type="text"
                    value={loginId}
                    onChange={onChangeId}
                  />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">ID:</span>
                  </label>
                </LoginInputWrapper>
                <LoginInputWrapper>
                  <LoginInput
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <label htmlFor="text" className="label-name">
                    <span className="content-name">PW:</span>
                  </label>
                </LoginInputWrapper>
                <div style={{ display: "flex", marginTop: "60px" }}>
                  <LoginButton onClick={handleLogin}>login</LoginButton>
                  <LoginButton onClick={moveSignUp}>sign up</LoginButton>
                </div>
              </LoginForm>
            </FormInnerWrapper>
          </FormContainer>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
