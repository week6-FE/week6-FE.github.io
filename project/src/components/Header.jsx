import React from "react";
import styled from "styled-components";
import '../App.css'

// image
import Logo from "../image/logo.svg";

// components
import Button from "../components/Button"


const Header = () => {
    return (
        <>
            <HeaderWrap>
                <img src={Logo} alt="logo" />
                <Button btn="로그인" />
            </HeaderWrap>
        </>
    );
}

const HeaderWrap = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

export default Header;