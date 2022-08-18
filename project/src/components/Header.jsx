import React from "react";
import styled from "styled-components";
import "../App.css";

// image
import Logo from "../image/logo.svg";


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

  const movePost = () => {
    navigate("/post")
  }

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
            <div style={{ display: 'flex' }}>
              <EmptyBtn
                onClick={moveSignUp}
              >
                회원가입
              </EmptyBtn>
              <FilledBtn onClick={moveLogin}>로그인</FilledBtn>
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
                  fontWeight: "bold"
                }}
              >
                {localStorage.getItem("nickname")}
              </span>
              <span
                style={{
                  marginLeft: "4px",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  color: "#63a1ff",
                }}
              >
                님 환영합니다
              </span>
              <div style={{ display: "flex" }}>
                <FilledBtn onClick={movePost} style={{ marginRight: "16px" }}>글쓰기</FilledBtn>
                <EmptyBtn onClick={onClickLogout}>로그아웃</EmptyBtn>
              </div>
            </div>
          </HeaderInlineContainer >
        )}
      </HeaderWrap >
    </>
  );
};

const HeaderWrap = styled.div`
  height: 80px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: blur(30px);
`;

const HeaderInlineContainer = styled.div`
  width: 1032px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SignUpBtn = styled.div`
  border: 1px solid #63A1FF;
  padding: 6px 16px;
  color: #63A1FF;
  font-weight: 500;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  padding: 6px 16px;
  background-color: #63A1FF;
  color: #fff;
  font-weight: 500;
  margin-left: 16px;
  cursor: pointer;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


const FilledBtn = styled.div`
  padding: 6px 16px;
  background-color: #63A1FF;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius: 2px;
  margin-left: 16px;
`;

const EmptyBtn = styled.div`
  padding: 6px 16px;
  border: 1px solid #63A1FF;
  color: #63A1FF;
  cursor: pointer;
  font-weight: 500;
  border-radius: 2px;
`;



const LoginInfo = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.div`

`;
export default Header;
