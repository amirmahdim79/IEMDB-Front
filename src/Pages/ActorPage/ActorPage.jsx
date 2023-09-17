import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { ActorProfileImage, BoxContainer, ContainerDiv, InfoContainer, Information, InformationText, InformationTitle, MoviesContainer, MoviesSection } from './ActorPageStyles';
import {
    Button,
} from '@mui/material';
import { Loading } from '../../Components/Utilities/Loading';
import { Marginer } from '../../Components/Utilities/Marginer';
import { Movie } from '../../Components/Movie/Movie';
import { FarsiText } from '../../Components/Global/FarsiText';
import { getActor, getActorAge, getStarredMovies } from '../../Api/Services/users';

export function ActorPage({ token, setToken, notify}) {
    let { id } = useParams()
    const [actor, setActor] = useState({})
    const [load, setLoad] = useState(false)
    const [starred, setStarred] = useState([])
    const [starredCount, setStarredCount] = useState(0)

    useEffect(() => {
        if (id && token) {
            console.log(token)
            getActor(id, token).then((res) => {
                setActor(res)
            })
            getStarredMovies(id, token).then((res) => {
                setStarredCount(Object.keys(res).length)
                setStarred(res)
                setLoad(true)
            })
        }
    }, [])

    return (
        <ContainerDiv>
            <Navbar notify={notify} token={token} setToken={setToken} search={false}></Navbar>
            {!load && (
                <Loading />
            )}
            {load && (
                <BoxContainer>
                    <ActorProfileImage src={actor.image} />
                    <InfoContainer>
                        <Information>
                            <InformationTitle>مشخصات بازیگر</InformationTitle>
                            <InformationText>نام: {actor.name}</InformationText>
                            <InformationText>تاریخ تولد: {actor.birthDate}</InformationText>
                            <InformationText>ملیت: {actor.nationality}</InformationText>
                            <InformationText>تعداد فیلم ها: {starredCount}</InformationText>
                        </Information>
                        <MoviesSection>
                            <FarsiText>فیلم ها</FarsiText>
                            <MoviesContainer>
                                {Object.keys(starred).map((m, i) => {
                                    return (
                                        <Movie movie={starred[m]} />
                                    )
                                })}
                            </MoviesContainer>
                        </MoviesSection>
                    </InfoContainer>
                </BoxContainer>
            )}
        </ContainerDiv>
    )
}