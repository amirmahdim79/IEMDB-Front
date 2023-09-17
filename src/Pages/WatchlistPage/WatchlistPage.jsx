import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { BoxContainer, ContainerDiv, RecomContainer, RecomMovies, RecomTitle } from './WatchlistStyles';
import {
    Button,
} from '@mui/material';
import { Loading } from '../../Components/Utilities/Loading';
import DeleteIcon from '@mui/icons-material/Delete';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { Marginer } from '../../Components/Utilities/Marginer';
import { Movie } from '../../Components/Movie/Movie';
import { deleteFromWatchlistUser, getOneUser, getUserRecomList, getUserWatchlist } from '../../Api/Services/users';
import { FarsiText } from '../../Components/Global/FarsiText';

export function WatchlistPage({ notify, token, setToken}) {
    const [load, setLoad] = useState(false)
    const [watchlist, setWatchlist] = useState([])
    const [recomList, setRecomList] = useState([])
    const [email, setEmail] = useState('')

    useEffect(() => {
        setEmail(localStorage.getItem('iemdbEmail'))
        getData()
    }, [token])

    const getData = () => {
        if (token) {
            getUserWatchlist(token).then((res) => {
                console.log(res)
                setWatchlist(res)
                getUserRecomList(token).then((res) => {
                    setRecomList(res)
                    setLoad(true)
                })
                setLoad(true)
            })
        }
    }

    const handleDelete = (movieId) => {
        let data = {
            movieId: movieId
        }
        console.log(data)
        console.log(token)
        deleteFromWatchlistUser(data, token).then((res) => {
            getData()
            notify('فیلم با موفقیت از لیست تماشا حذف شد')
        })
    }

    return (
        <ContainerDiv>
            <Navbar notify={notify} token={token} setToken={setToken} search={false}></Navbar>
            {!load && (
                <Loading />
            )}
            {load && (
                <BoxContainer>
                    {watchlist.map((m) => {
                        return(
                            <>
                                <MovieCard handleDelete={handleDelete} email={email} movie={m}/>
                                <Marginer size={30} />
                            </>
                        )
                    })}
                    {watchlist.length === 0 && (
                        <FarsiText>هیچ فیلمی در لیست مشاهده شما وجود ندارد!</FarsiText>
                    )}
                    <RecomContainer>
                        <RecomTitle>فیلم های پیشنهادی</RecomTitle>
                        <RecomMovies>
                            {recomList.map((m) => {
                                return (
                                    <Movie movie={m} />
                                )
                            })}
                        </RecomMovies>
                    </RecomContainer>
                </BoxContainer>
                
            )}
        </ContainerDiv>
    )
}