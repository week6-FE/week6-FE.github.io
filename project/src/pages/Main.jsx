import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { __getBoard } from "../_redux/modules/postSlice";
import "./Main.css";

const MainContainer = styled.div`
  width: 1032px;
  margin: 0 auto;
  height: 100%;
  background-attachment: fixed;
`;

const MainCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  justify-content: space-between;
  `;

const ImageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #63A1FF;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
    transition: all 0.3s;
  }
`;

const ImageContainer = styled.div`
  width: 464px;
  height: 301px;
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
  }, [dispatch]);

  return (
    <>
      <Header />

      <MainContainer>
        <MainCardContainer>
          {userInfo &&
            userInfo.map((user, index) => (
              // post width
              <div key={index} style={{ width: "48%" }}>
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
                      alt=""
                      src={user.imageUrl}
                      // post image sizing
                      style={{
                        width: "98%",
                        height: "100%",
                      }}
                    />
                  </ImageContainer>
                  <div
                    style={{
                      // post text
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <section
                      // ??
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* font custom */}
                      <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
                        {user.author}
                      </span>
                      <span>{user.title}</span>
                    </section>

                    <div
                      // ??
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <span
                        // post date
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
