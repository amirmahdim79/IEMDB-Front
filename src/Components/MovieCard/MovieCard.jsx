import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { ContainerDiv, MoviePoster, MovieTitle, Ratings, RatingInfo, Information } from './MovieCardStyles';
import {
    Button,
} from '@mui/material';
import { Loading } from '../../Components/Utilities/Loading';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { FarsiText } from '../Global/FarsiText';

export function MovieCard({ email, movie, handleDelete}) {
    const navigate = useNavigate();
    const [load, setLoad] = useState(true)

    const openMoviePage = () => {
        navigate('/movie/' + movie.id)
    }

    return (
        <ContainerDiv>
            <MoviePoster onClick={openMoviePage} src={movie.image} />
            <MovieTitle>{movie.name}</MovieTitle>
            <Ratings>
                <RatingInfo>امتیاز IMDB: {movie.imdbRate}</RatingInfo>
                <RatingInfo>امتیاز کاربران: {movie.rating}</RatingInfo>
            </Ratings>
            <Information>
                <DeleteIcon onClick={() => {handleDelete(movie.id)}} sx={{color: 'red', cursor: 'pointer'}} />
                <FarsiText><b>کارگردان:</b> {movie.director}</FarsiText>
                <FarsiText><b>ژانر:</b> {movie.genres.join(', ')}</FarsiText>
                <FarsiText><b>تاریخ انتشار:</b> {movie.releaseDate}</FarsiText>
                <FarsiText><b>مدت زمان:</b> {movie.duration} دقیقه</FarsiText>
            </Information>
        </ContainerDiv>
    )
}