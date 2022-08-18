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
              <button>회원가입</button>
              <button>로그인</button>
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
            <div>
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

export default Header;
