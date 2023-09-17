import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { BoxContainer, ContainerDiv, MoviesContainer } from './HomePageStyles';
import {
    Button,
} from '@mui/material';
import { Loading } from '../../Components/Utilities/Loading';
import { Movie } from '../../Components/Movie/Movie';
import { SortBox } from '../../Components/Movie/SortBox';
import { getMovies, getMoviesByDate, getMoviesByGenre, getMoviesByName, getMoviesSort } from '../../Api/Services/users';

export function HomePage({ token, setToken, notify, email, setEmail}) {
    const [load, setLoad] = useState(false)
    const [sort, setSort] = useState(null)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (token) {
            getMovies(token).then((res) => {
                setMovies(res)
                setLoad(true)
            }).catch((err) => {
                console.log(token)
                console.log(err)
            })
        }
    }, [])

    const handleSort = (type) => {
        setSort(type)
        setLoad(false)
        getMoviesSort(type, token).then((res) => {
            setMovies(res)
            setLoad(true)
        })
    }

    const handleSearch = (type, word) => {
        setLoad(false)
        // name
        if (type === 1) {
            getMoviesByName(word, token).then((res) => {
                setMovies(res)
                setLoad(true)
            })
        }
        // genre
        if (type === 2) {
            getMoviesByGenre(word, token).then((res) => {
                setMovies(res)
                setLoad(true)
            })
        }
        // date
        if (type === 3) {
            let words = []
            try {
                words = word.split(' ')
            } catch (err) {
                notify('فرم تاریخ باید به صورت تاریخ شروع فاصله تاریخ پایان باشه')
                console.log(err)
            }
            getMoviesByDate(words[0], words[1], token).then((res) => {
                setMovies(res)
                setLoad(true)
            })
        }
    }

    return (
        <ContainerDiv>
            <Navbar notify={notify} searchFunc={handleSearch} setToken={setToken} search={true}></Navbar>
            {!load && (
                <Loading />
            )}
            {load && (
                <BoxContainer>
                    <MoviesContainer>
                        {Object.keys(movies).map((m, i) => {
                            return (
                                <Movie movie={movies[m]} />
                            )
                        })}
                    </MoviesContainer>
                    <SortBox handleSort={handleSort} />
                </BoxContainer>
            )}
        </ContainerDiv>
    )
}