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

  const moveSignup = () => {
    navigate("/signup")
  }

  const moveLogin = () => {
    navigate("/login")
  }

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
<<<<<<< HEAD
            <BtnWrap>
              <SignUpBtn onClick={moveSignup}>회원가입</SignUpBtn>
              <LoginBtn onClick={moveLogin}>로그인</LoginBtn>
            </BtnWrap>
=======
            <div>
              <HeaderButton
                onClick={moveSignUp}
                style={{ marginRight: "30px" }}
              >
                회원가입
              </HeaderButton>
              <HeaderButton onClick={moveLogin}>로그인</HeaderButton>
            </div>
>>>>>>> 13a81b32d5ff07e32a019240121fa447d0f92fe5
          </HeaderInlineContainer>
        ) : (
          <HeaderInlineContainer>
            <img
              src={Logo}
              alt="logo"
              onClick={main}
              style={{ cursor: "pointer" }}
            />
<<<<<<< HEAD
            <LoginInfo>
=======
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
>>>>>>> 13a81b32d5ff07e32a019240121fa447d0f92fe5
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
<<<<<<< HEAD
              <PostBtn onClick={movePost}>글쓰기</PostBtn>
            </LoginInfo>

=======
              <div style={{ paddingLeft: "30px" }}>
                <HeaderButton onClick={onClickLogout}>로그아웃</HeaderButton>
              </div>
            </div>
>>>>>>> 13a81b32d5ff07e32a019240121fa447d0f92fe5
          </HeaderInlineContainer>
        )}
      </HeaderWrap>
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

<<<<<<< HEAD
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


const PostBtn = styled.div`
  padding: 6px 16px;
  background-color: #63A1FF;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius: 2px;
  margin-left: 16px;
`;


const LoginInfo = styled.div`
  display: flex;
  align-items: center;
`;
=======
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

>>>>>>> 13a81b32d5ff07e32a019240121fa447d0f92fe5
export default Header;
