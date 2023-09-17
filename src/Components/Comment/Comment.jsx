import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import { CommentInput, CommentTextContainer, CommentTitle, ContainerDiv, SubmitButton } from './CommentStyles';
import { Marginer } from '../Utilities/Marginer';
import { Liner90 } from '../Utilities/Liner';
import { Vote } from './Vote';

export function Comment({ cm, voteComment }) {
    const [comment, setComment] = useState(cm)

    return (
        <ContainerDiv>
            <CommentTitle>{comment.userEmail}</CommentTitle>
            <Marginer size={7} />
            <Liner90 color={'#b3b3b6'} />
            <CommentTextContainer>
                <CommentInput readOnly>{comment.text}</CommentInput>
                <Vote comment={comment} voteComment={voteComment} />
            </CommentTextContainer>
        </ContainerDiv>
    )
}