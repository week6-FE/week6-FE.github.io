// import React, { useState } from "react";
// import styled from "styled-components";
// import GlobalStyle from '../GlobalStyle';
// import { useDispatch, useSelector } from "react-redux";
// import '../App.css';
// import { Navigate, useNavigate } from "react-router-dom";

// // image
// import AddImage from '../image/addImage.svg'

// // components
// import Header from '../components/Header';
// import Button from '../components/Button'
// import { addPost } from "../redux/modules/postSlice";

// const Post = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // text useState
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");

//     // image preview useState
//     const [previewImage, setPreviewImage] = useState('');
//     const [uploadImageForm, setUploadImageForm] = useState(null);

//     // post reducer
//     const posts = useSelector((state) => state.posts.posts);

//     // post useState
//     const [post, setPost] = useState({
//         title: '',
//         content: '',
//         file: ''
//     });

//     const imgFileHandler = (e) => {
//         setUploadImageForm(e.target.files[0]);

//         let reader = new FileReader();
//         if (e.target.files[0]) {
//             reader.readAsDataURL(e.target.files[0])
//         }
//         reader.onload = () => {
//             const previewImgUrl = reader.result;
//             if (previewImgUrl) {
//                 setPreviewImage([...previewImage, previewImgUrl])
//             }

//         }
//     }

//     const sendpreviewImage = previewImage[0];

//     const postHandler = (e) => {
//         setTitle(e.target.value);
//         setContent(e.target.value);
//         const { value, name } = e.target;
//         setPost({
//             ...post,
//             [name]: value,
//             file: uploadImageForm,
//         })

//     }

//     const submitHandler = () => {
//         dispatch(addPost(post));
//         if (!title || !content || !previewImage) return alert('빈칸 없이 입력해 주세요');
//         navigate("/")
//     }

//     return (
//         <>
//             <GlobalStyle />
//             <Header />
//             <PostWrap>
//                 <ImageBox>
//                     <img
//                         src={previewImage ? previewImage : AddImage}
//                         alt="add-image"
//                         style={{ marginBottom: "24px", width: '464px', height: '301px' }}
//                     />
//                     <div><Button btn='image' label='addFile' /></div>
//                     <InputFile
//                         type="file"
//                         id='addFile'
//                         onChange={imgFileHandler}
//                         accept='image/jpg, image/jpeg, image/png'
//                         style={{ display: 'none' }}
//                     />
//                 </ImageBox>
//                 <TextBox>
//                     <InputTextTitle>Title</InputTextTitle>
//                     <InputTitleBox
//                         type="text"
//                         name="title"
//                         placeholder="input title"
//                         onChange={postHandler}
//                         maxLength='12'
//                     />
//                     <InputTextTitle>Content</InputTextTitle>
//                     <InputContentsBox
//                         type="text"
//                         name="content"
//                         placeholder="input contents"
//                         onChange={postHandler}
//                         maxLength='50'
//                     />
//                     <div onClick={submitHandler} style={{ textAlign: 'right' }}><Button btn="Post" /></div>
//                 </TextBox>

//             </PostWrap>
//         </>
//     );
// }

// const PostWrap = styled.div`
//     padding: 60px;
//     border: 1px solid #63A1FF;
//     display: flex;
//     justify-content: space-between;
// `;

// const ImageBox = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const InputFile = styled.input``;

// const TextBox = styled.div`
// width: 388px;
// `;

// const InputTextTitle = styled.div`
//     font-size: 18px;
//     font-weight: 600;
//     color: #63a1ff;
//     margin-bottom: 8px;
// `;

// const InputTitleBox = styled.input`
//     width: 388px;
//     padding: 6px 0 6px 12px;
//     margin-bottom: 30px;
//     border: 1px solid #63A1FF;
//     ::placeholder { color: #B1D0FF;}
// `;

// const InputContentsBox = styled.textarea`
//     width: 388px;
//     height: 175px;
//     margin-bottom: 30px;
//     padding: 6px 0 6px 12px;
//     border: 1px solid #63A1FF;
//     ::placeholder { color: #B1D0FF; }
// `;

// export default Post;