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
            <div>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                &nbsp;
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
              // image sizing
              style={{
                width: "912px",
                height: "592px",
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
            <span style={{ fontStyle: "italic", fontSize: "20px" }}>
              Time Created:&nbsp;
            </span>
            <span
              style={{
                paddingRight: "20px",
                fontStyle: "italic",
                fontSize: "20px",
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
  height: 100%;
  width: 100%;
<<<<<<< HEAD
  border: 1px solid #63A1FF;
  border-radius: 2px;
=======
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 3px 6px grey;
>>>>>>> 13a81b32d5ff07e32a019240121fa447d0f92fe5
`;

const MoveMainButton = styled.button`
width: 20px;
height: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #63A1FF;
  border: none;
  background-color: #fff;
  transition: 500ms ease-in-out;
  margin: 20px;
  border-radius: 5px;
  &:hover {
    box-shadow: 5px 5px 0 rgba(105, 171, 224, 0.6),
      -5px -5px 0 rgba(105, 171, 224, 0.6);
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
width: 920px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const DetailNickTitle = styled.span`
  font-size: 20px;
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
