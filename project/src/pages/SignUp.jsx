import React from "react";
import styled from "styled-components";
import GlobalStyle from '../GlobalStyle';
import '../App.css'

// components
import Header from '../components/Header';

const SignUp = () => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Title>Sign up</Title>
            <InputWrap>
                <InputText type="text" placeholder="nickname" />
                <InputText type="text" placeholder="id" />
                <InputText type="text" placeholder="password" />
                <InputText type="text" placeholder="confirm password" />
                <SubmitBtn>Sign up</SubmitBtn>
            </InputWrap>
        </>
    );
}


const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #63A1FF;
    margin-bottom: 60px;
`;

const InputWrap = styled.div`
    width: 376px;
    margin: 0 auto;
`;

const InputText = styled.input`
    width: 376px;
    padding: 12px 16px;
    border: 1px solid #63A1FF;
    margin-bottom: 24px;
    ::placeholder { color: #B1D0FF;}
`;

const SubmitBtn = styled.div`
    width: 376px;
    padding: 12px 0;
    text-align: center;
    background-color: #63A1FF;
    color: #fff;
    cursor: pointer;
`;

export default SignUp;