import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import { CommentInput, CommentTitle, ContainerDiv, SubmitButton } from './CommentStyles';
import { Marginer } from '../Utilities/Marginer';
import { Liner90 } from '../Utilities/Liner';

export function AddComment({ text, setText, sendComment }) {

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <ContainerDiv>
            <CommentTitle>دیدگاه خود را اضافه کنید:</CommentTitle>
            <Marginer size={7} />
            <Liner90 color={'#b3b3b6'} />
            <CommentInput value={text} onChange={handleChange} placeholder="نظر خود را بنویسید" ></CommentInput>
            <SubmitButton onClick={sendComment}>ثبت</SubmitButton>
        </ContainerDiv>
    )
}