import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { ActorContainer, Bio, BoxContainer, CommentSection, ContainerDiv, Information, InfoText, MovieBackground, MovieContainer, MovieImage, MovieInfo, MovieTitle, AddButton } from './MoviePageStyles';
import {
    Button,
} from '@mui/material';
import { Loading } from '../../Components/Utilities/Loading';
import { Movie } from '../../Components/Movie/Movie';
import { SortBox } from '../../Components/Movie/SortBox';
import { FarsiText } from '../../Components/Global/FarsiText';
import { Liner, Liner90 } from '../../Components/Utilities/Liner';
import { Marginer } from '../../Components/Utilities/Marginer';
import { Actor } from '../../Components/Actor/Actor';
import { AddComment } from '../../Components/Comment/AddComment';
import { Comment } from '../../Components/Comment/Comment';
import { Ratings } from '../../Components/Ratings/Ratings';
import { addComment, addToWatchlistUser, getMovieById, voteCommentUser } from '../../Api/Services/users';

export function MoviePage({ notify, token, setToken }) {
    let { id } = useParams()
    const [load, setLoad] = useState(false)
    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [comments, setComments] = useState([])
    const [rated, setRated] = useState(0)
    const [text, setText] = useState('')
    const [showComments, setShowComments] = useState(true)
    const [email, setEmail] = useState('')

    useEffect(() => {
        setEmail(localStorage.getItem('iemdbEmail'))
        if (token) {
            getData()
        }
    }, [rated])

    const getData = () => {
        getMovieById(id, token).then((res) => {
            console.log(res)
            setMovie(res)
            setCast(res.cast)
            setComments(res.comments)
            res.ratings.forEach((el) => {
                if (el.userEmail === localStorage.getItem('iemdbEmail')) {
                    setRated(el.score)
                }
            })

            setShowComments(true)
            setLoad(true)
        })
    }

    const addToWatchlist = () => {
        let data = {
            userEmail: email,
            movieId: id
        }
        console.log(data)
        addToWatchlistUser(data, token).then((res) => {
            notify('فیلم با موفقیت به لیست تماشا اضافه شد')
        })
    }

    const sendComment = () => {
        let data = {
            userEmail: email,
            movieId: id,
            text: text
        }
        if (text === '') {
            notify('کامنت نمیتونه خالی باشه')
        } else {
            addComment(data, token).then((res) => {
                setText('')
                getData()
                notify('کامنت شما با موفقیت ثبت شد')
                
            })
        }
    }

    const voteComment = (commentId, vote) => {
        let data = {
            userEmail: email,
            commentId: commentId,
            vote: vote
        }
        setShowComments(false)
        voteCommentUser(data, token).then((res) => {
            getData()
            notify('رای شما با موفقیت ثبت شد')
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
                    <MovieBackground src={movie.coverImage} />
                    <MovieContainer>
                        <MovieImage src={movie.image} />
                        <AddButton onClick={addToWatchlist}>افزودن به لیست</AddButton>
                        <MovieInfo>
                            <MovieTitle>{movie.name}</MovieTitle>
                            <Information>
                                <InfoText><b>کارگردان:</b> {movie.director}</InfoText>
                                <InfoText><b>نویسندگان:</b> {movie.writers.join(', ')}</InfoText>
                                <InfoText><b>ژانر:</b> {movie.genres.join(', ')}</InfoText>
                                <InfoText><b>مدت زمان:</b> {movie.duration} دقیقه</InfoText>
                            </Information>
                            <FarsiText>تاریخ انتشار: {movie.releaseDate}</FarsiText>
                            <Marginer size={20}/>
                            <Liner90 color={'#4e4e50'}></Liner90>
                            <Marginer size={20}/>
                            <Bio>
                                {movie.summary}
                            </Bio>
                        </MovieInfo>
                        <Ratings setLoad={setRated} email={email} m={movie} sc={rated} notify={notify} token={token} />
                    </MovieContainer>
                    <FarsiText>بازیگران</FarsiText>
                    <Marginer size={20} />
                    <ActorContainer>
                        {cast.map((id) => {
                            return (
                                <Actor actorId={id} token={token} />
                            )
                        })}
                    </ActorContainer>
                    <Marginer size={40} />
                    <CommentSection>
                        <FarsiText>دیدگاه ها</FarsiText>
                        <AddComment text={text} setText={setText} sendComment={sendComment} />
                        {showComments && comments.map((comment) => {
                            return (
                                <Comment cm={comment} voteComment={voteComment} />
                            )
                        })}
                    </CommentSection>
                </BoxContainer>
            )}
        </ContainerDiv>
    )
}