import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getLoginUser } from "../_redux/modules/signup";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getLoginUser());
  }, []);

  //   console.log(__getLoginUser);
  return <>main</>;
};

export default Main;
