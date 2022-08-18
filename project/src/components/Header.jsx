import React from "react";
import styled from "styled-components";
import "../App.css";

// image
import Logo from "../image/logo.svg";

// components
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const main = () => {
    navigate("/");
    window.location.reload();
  };

  const moveLogin = () => {
    navigate("/login");
  };

  const moveSignUp = () => {
    navigate("/signup");
  };

  const onClickLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <HeaderWrap>
        {localStorage.getItem("refreshToken") === null ? (
          <HeaderInlineContainer>
            <img
              src={Logo}
              alt="logo"
              onClick={main}
              style={{ cursor: "pointer" }}
            />
            <div>
              <HeaderButton
                onClick={moveSignUp}
                style={{ marginRight: "30px" }}
              >
                회원가입
              </HeaderButton>
              <HeaderButton onClick={moveLogin}>로그인</HeaderButton>
            </div>
          </HeaderInlineContainer>
        ) : (
          <HeaderInlineContainer>
            <img
              src={Logo}
              alt="logo"
              onClick={main}
              style={{ cursor: "pointer" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                "{localStorage.getItem("nickname")}"
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  color: "#63a1ff",
                }}
              >
                님 환영합니다
              </span>
              <div style={{ paddingLeft: "30px" }}>
                <HeaderButton onClick={onClickLogout}>로그아웃</HeaderButton>
              </div>
            </div>
          </HeaderInlineContainer>
        )}
      </HeaderWrap>
    </>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 130px;
  border: 2px solid #63a1ff;
  background-color: rgba(99, 161, 255, 0.4);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: blur(30px);
`;

const HeaderInlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderButton = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: black;
  background: white;
  border-radius: 10px;
  border: 1px solid rgba(105, 171, 224, 1);
  box-shadow: 5px 5px 0 rgba(105, 171, 224, 1),
    -5px -5px 0 rgba(105, 171, 224, 1), -5px 5px 0 rgba(105, 171, 224, 1),
    5px -5px 0 rgba(105, 171, 224, 1);
  transition: 500ms ease-in-out;
  &:hover {
    box-shadow: 20px 5px 0 rgba(105, 171, 224, 1),
      -20px -5px 0 rgba(105, 171, 224, 1);
  }
  &:focus {
    outline: none;
  }
`;

export default Header;
