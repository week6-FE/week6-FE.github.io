import React from "react";
import styled from "styled-components";
import '../App.css'

// image
import Logo from "../image/logo.svg";

// components
import Button from "../components/Button"
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const main = () => {
        navigate("/")
    }

    return (
        <>
            <HeaderWrap>
                <img src={Logo} alt="logo" onClick={main} style={{ cursor: 'pointer' }} />
                {/* <Button btn="로그인" /> */}
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