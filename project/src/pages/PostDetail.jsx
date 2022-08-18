import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { __getDetailBoard } from "../_redux/modules/postSlice";

const PostDetail = () => {
  const userDetail = useSelector((state) => state.posts.posts.data);
  const { state } = useLocation();

  const moveMain = () => {
    window.location.replace("/");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getDetailBoard(state));
  }, [dispatch, state]);

  return (
    <>
      <Header />
      <DetailContainer>
        <DetailInlineWrapper>
          <TitleContainer>
            <MoveMainButton onClick={moveMain}>⬅</MoveMainButton>
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <span style={{ fontSize: "2em", fontWeight: "bold" }}>
                NickName:&nbsp;
              </span>
              <DetailNickTitle>
                {userDetail && userDetail.author}
              </DetailNickTitle>
            </div>
          </TitleContainer>
          <ImageContainer>
            <img
              alt=""
              src={userDetail && userDetail.imageUrl}
              style={{
                width: "500px",
                height: "400px",
              }}
            />
          </ImageContainer>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              fontSize: "1.3em",
              paddingTop: "10px",
            }}
          >
            <span style={{ fontStyle: "italic", fontSize: "1.2em" }}>
              Time Created:&nbsp;
            </span>
            <span
              style={{
                paddingRight: "20px",
                fontStyle: "italic",
                fontSize: "1.2em",
              }}
            >
              {String(userDetail && userDetail.createdAt).substring(11, 19)}
            </span>
          </div>
          <ContentContainer>
            <div style={{ padding: "20px" }}>
              <span style={{ fontSize: "2em" }}>Title:&nbsp;</span>
              <DetailTitle>{userDetail && userDetail.title}</DetailTitle>
            </div>
            <div style={{ padding: "20px" }}>
              <span style={{ fontSize: "1.5em" }}>Content:&nbsp;</span>
              <ContentTitle>{userDetail && userDetail.content}</ContentTitle>
            </div>
          </ContentContainer>
        </DetailInlineWrapper>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: inear-gradient(45deg, #e6e2df 80%, #c2c1bd 100%); ;
`;

const DetailInlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 3px 6px grey;
`;

const MoveMainButton = styled.button`
  width: 100px;
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

const ImageContainer = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const DetailNickTitle = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: #63a1ff;
`;

const DetailTitle = styled.span`
  font-size: 2em;
  color: #63a1ff;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentTitle = styled.span`
  font-size: 1.5em;
`;

export default PostDetail;
