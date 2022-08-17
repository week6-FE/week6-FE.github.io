import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { __getLoginUser } from "../_redux/modules/signup";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 70px;
`;

const MainTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  // const [userInfo, setUserInfo] = useState({});
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(JSON.stringify(user));

  console.log(userInfo);

  useEffect(() => {
    dispatch(__getLoginUser());
  }, []);

  return (
    <>
      <MainContainer>
        <MainTitleContainer>
          <span style={{ fontSize: "2em" }}>또스타그램</span>
          <div>
            <button>회원가입</button>
            <button>로그인</button>
          </div>
        </MainTitleContainer>
        <MainCardContainer>
          {/* {userInfo.map((user) => (
            <div key={user.id} style={{ width: "45%" }}>
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
                      {user.createdAt.substr(0, 10)}
                    </span>
                    <span style={{ letterSpacing: "2px" }}>
                      {user.createdAt.substr(11, 8)}
                    </span>
                  </div>
                </div>
              </ImageTitleContainer>
            </div>
          ))} */}
        </MainCardContainer>
      </MainContainer>
    </>
  );
};

export default Main;
