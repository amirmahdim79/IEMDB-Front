import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import {  } from './CommentStyles';
import { Marginer } from '../Utilities/Marginer';
import { Liner90 } from '../Utilities/Liner';
import styled from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const VoteContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const UpvoteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4ecb71;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 100%;
    margin: 10px 0px 0 0;
    color: white;
    transition: 0.1s;

    :active {
        background-color: #2f7944;
    }
`
const DownvoteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5343b;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 100%;
    margin: 10px 0px 0 0;
    color: white;
    transition: 0.1s;

    :active {
        background-color: #852023;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`

const Count = styled.p`
    margin-top: 5px;
    align-self: center;
`

export function Vote({comment, voteComment}) {
    const [likes, setLikes] = useState(comment.likes)
    const [disLikes, setDisLikes] = useState(comment.disLikes)
    const [commentId, setCommentId] = useState(comment.id)
    const [movieId, setMovieId] = useState(comment.movieId)

    const onUpvote = () => {
        voteComment(commentId, 1)
    }

    const onDownvote = () => {
        voteComment(commentId, -1)
    }

    return (
        <VoteContainer>
            <Container>
                <UpvoteButton onClick={onUpvote}>
                    <ExpandLessIcon />
                </UpvoteButton>
                <Count>{likes}</Count>
            </Container>
            <Container>
                <DownvoteButton onClick={onDownvote}>
                    <ExpandMoreIcon />
                </DownvoteButton>
                <Count>{disLikes}</Count>
            </Container>
        </VoteContainer>
    )
}