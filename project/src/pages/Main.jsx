import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getLoginUser, __postLoginUser } from "../_redux/modules/signup";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  const userInfo = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // console.log(userInfo);

  // useEffect(() => {
  //   dispatch(__getLoginUser());
  // }, []);

  useEffect(() => {
    fetch("http://15.164.234.179/api/member/login")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <MainContainer>main</MainContainer>
    </>
  );
};

export default Main;
