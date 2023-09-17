import React, { useState, useEffect } from 'react';
import {
    Button,
    Typography,
    ClickAwayListener,
} from '@mui/material';
import { Marginer } from '../Utilities/Marginer';
import { Liner90 } from '../Utilities/Liner';
import { ContainerDiv, Rating, StarContainer } from './RatingsStyles';
import StarIcon from '@mui/icons-material/Star';
import { Star } from './Star';
import { ComponentLoading } from '../Utilities/Loading';

export function Ratings({ m, sc, email, setLoad, notify, token }) {
    const maxScore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [score, setScore] = useState(sc)
    const [open, setOpen] = useState(false)
    const [movie, setMovie] = useState(m)

    useEffect(() => {
        setMovie(m)
    }, [m])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    if (true) {
        return (
            <ContainerDiv>
                <Rating>{movie.imdbRate}</Rating>
                {!open && (
                    <StarIcon
                        sx={{
                            color: 'yellow',
                            marginBottom: '20px',
                            fontSize: '30px',
                            cursor: 'pointer'
                        }}
                        onClick={handleOpen}
                    />
                )}
                {open && (
                    <ClickAwayListener onClickAway={handleClose}>
                        <StarContainer>
                            {maxScore.map((e, i) => (
                                <Star setLoad={setLoad} movieId={movie.id} email={email} token={token} onClick={handleClose} index={i} sc={score} setScore={setScore} notify={notify}/>
                            ))}
                        </StarContainer>
                    </ClickAwayListener>
                )}
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '20px',
                        direction: 'rtl',
                    }}
                >
                    امتیاز کاربران: {movie.rating}
                </Typography>
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '15px',
                        direction: 'rtl',
                        opacity: '0.5',
                        marginTop: '5px',
                    }}
                >
                    ({movie.ratingCount} رای)
                </Typography>
            </ContainerDiv>
        )
    } else {
        return (
            <ComponentLoading />
        )
    }
}