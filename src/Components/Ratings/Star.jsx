import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import {  } from './RatingsStyles';
import { Marginer } from '../Utilities/Marginer';
import StarIcon from '@mui/icons-material/Star';
import { rateMovie } from '../../Api/Services/users';

export function Star({ sc, index, setScore, onClick, movieId, email, setLoad, notify, token }) {
    const [on, setOn] = useState(false)

    useEffect(() => {
        if (index + 1 <= sc) {
            setOn(true)
        }
    }, [])
    
    const handleClick = () => {
        let data = {
            score: index + 1,
            userEmail: email,
            movieId: movieId

        }
        console.log(data)
        rateMovie(data, token).then((res) => {
            setScore(index + 1)
            console.log(res)
            setOn(true)
            onClick()
            setLoad(index + 1)
            notify('رای شما ثبت شد')
        })
    }

    if (on) {
        return (
            <StarIcon
                sx={{
                    color: 'yellow',
                    fontSize: '30px',
                }}
                onClick={handleClick}
            />
        )
    } else {
        return (
            <StarIcon
                sx={{
                    color: 'gray',
                    fontSize: '30px',
                }}
                onClick={handleClick}
            />
        )
    }
}