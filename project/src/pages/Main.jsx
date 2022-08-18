import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { __getBoard } from "../_redux/modules/postSlice";
import { __postLoginUser } from "../_redux/modules/signup";
import "./Main.css";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 160px;
  background-attachment: fixed;
`;

const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 60px;
  justify-content: center;
`;

const ImageTitleContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(99, 161, 255, 0.8);
  margin: 10px;
  border-radius: 10px;
  padding: 0 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  const userInfo = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getBoard());
  }, []);

  return (
    <>
      <Header />

      <MainContainer>
        <MainCardContainer>
          {userInfo &&
            userInfo.map((user, index) => (
              <div key={index} style={{ width: "45%" }}>
                <ImageTitleContainer
                  onClick={() =>
                    navigate(`/post/${user.id}`, {
                      state: {
                        id: user.id,
                      },
                    })
                  }
                >
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
                      <span
                        style={{ letterSpacing: "2px", fontStyle: "italic" }}
                      >
                        {String(user.createdAt).substring(0, 10)}
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
