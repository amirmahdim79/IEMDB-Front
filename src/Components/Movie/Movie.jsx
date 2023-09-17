import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import { ContainerDiv, MoviePoster, Overlay, Text } from './MovieStyles';
import { Marginer } from '../Utilities/Marginer';
import { useNavigate } from "react-router-dom";

export function Movie({ movie }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/movie/' + movie.id)
    }

    return (
        <ContainerDiv onClick={handleClick}>
            <MoviePoster src={movie.image} />
            <Overlay></Overlay>
            <Text>{movie.name}</Text>
            <Marginer size={10}></Marginer>
            <Text>{movie.imdbRate}</Text>
        </ContainerDiv>
    )
}