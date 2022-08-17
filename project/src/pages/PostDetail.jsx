import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { __getDetailBoard } from "../_redux/modules/postSlice";

const PostDetail = () => {
  const userDetail = useSelector((state) => state.posts.posts.data);
  const { state } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getDetailBoard(state.userId));
  }, []);

  console.log(userDetail);

  return (
    <>
      <Header />
      <DetailContainer>
        <DetailInlineWrapper>
          <TitleContainer>
            <DetailTitle>{userDetail && userDetail.title}</DetailTitle>
            <DetailTitle>{userDetail && userDetail.author}</DetailTitle>
          </TitleContainer>
          <ImageContainer>
            <img
              src={userDetail && userDetail.imageUrl}
              style={{
                width: "500px",
                height: "400px",
                border: "1px solid black",
                padding: "10px",
              }}
            />
          </ImageContainer>
          <ContentContainer>
            <ContentTitle>{userDetail && userDetail.content}</ContentTitle>
          </ContentContainer>
        </DetailInlineWrapper>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 160px;
  display: flex;
`;

const DetailInlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
`;

const ImageContainer = styled.div``;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailTitle = styled.span`
  font-size: 2em;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentTitle = styled.span``;

export default PostDetail;
