import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import { __getBoard } from "../_redux/modules/postSlice";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 70px;
`;

const MainTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 10px;
  justify-content: center;
`;

const MainNickNameContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MainNickName = styled.span`
  width: 100%;
  height: 100%;
`;

const ImageTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  margin: 10px;
  border-radius: 10px;
  padding: 0 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  const userInfo = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getBoard());
  }, []);

  return (
    <>
      <MainContainer>
        {localStorage.getItem("refreshToken") === null ? (
          <MainTitleContainer>
            <Header />
            <div style={{ marginBottom: "40px" }}>
              <button>회원가입</button>
              <button>로그인</button>
            </div>
          </MainTitleContainer>
        ) : (
          <MainTitleContainer>
            <Header />
            <div style={{ marginBottom: "40px" }}>
              <span
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                -{localStorage.getItem("nickname")}-
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  color: "#63A1FF",
                }}
              >
                환영합니다
              </span>
            </div>
          </MainTitleContainer>
        )}

        <MainCardContainer>
          {userInfo &&
            userInfo.map((user, index) => (
              <div key={index} style={{ width: "45%" }}>
                <ImageTitleContainer>
                  <ImageContainer>
                    <img
                      src={user.imageUrl}
                      style={{
                        width: "100%",
                        height: "350px",
                      }}
                    />
                  </ImageContainer>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <section
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
                        {user.author}
                      </span>
                      <span>{user.title}</span>
                    </section>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <span style={{ letterSpacing: "2px" }}>
                        {user.createdAt}
                      </span>
                      <span style={{ letterSpacing: "2px" }}>
                        {user.createdAt}
                      </span>
                    </div>
                  </div>
                </ImageTitleContainer>
              </div>
            ))}
        </MainCardContainer>
      </MainContainer>
    </>
  );
};

export default Main;
