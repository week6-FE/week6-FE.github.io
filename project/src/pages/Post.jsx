import React from "react";
import styled from "styled-components";
import GlobalStyle from '../GlobalStyle';
import '../App.css';

// image
import AddImage from '../image/addImage.svg'

// components
import Header from '../components/Header';
import Button from '../components/Button'

const Post = () => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <PostWrap>
                <ImageBox>
                    <img src={AddImage} alt="add-image" style={{ marginBottom: "24px" }} />
                    <div><Button btn='image' label='addFile' /></div>
                    <InputFile type="file" id='addFile' style={{ display: 'none' }} />
                </ImageBox>
                <TextBox>
                    <InputTextTitle>Title</InputTextTitle>
                    <InputTitleBox type="text" placeholder="input title" />
                    <InputTextTitle>Contents</InputTextTitle>
                    <InputContentsBox type="text" placeholder="input contents" />
                    <div style={{ textAlign: 'right' }}><Button btn="Post" /></div>
                </TextBox>
            </PostWrap>
        </>
    );
}

const PostWrap = styled.div`
    padding: 60px;
    border: 1px solid #63A1FF;
    display: flex;
    justify-content: space-between;
`;

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputFile = styled.input``;

const TextBox = styled.div`
width: 388px;
`;

const InputTextTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #63a1ff;
    margin-bottom: 8px;
`;

const InputTitleBox = styled.input`
    width: 388px;
    padding: 6px 0 6px 12px;
    margin-bottom: 30px;
    border: 1px solid #63A1FF;
    ::placeholder { color: #B1D0FF;}
`;

const InputContentsBox = styled.textarea`
    width: 388px;
    height: 175px;
    margin-bottom: 30px;
    padding: 6px 0 6px 12px;
    border: 1px solid #63A1FF;
    ::placeholder { color: #B1D0FF; }
`;

export default Post;