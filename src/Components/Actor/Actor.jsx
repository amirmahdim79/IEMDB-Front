import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import { ContainerDiv, ActorImage, Overlay, Text } from './ActorStyles';
import { useNavigate } from "react-router-dom";
import { Marginer } from '../Utilities/Marginer';
import { ComponentLoading, Loading } from '../Utilities/Loading';
import { getActor, getActorAge } from '../../Api/Services/users';


export function Actor({ actorId, token }) {
    const [load, setLoad] = useState(false)
    const [actor, setActor] = useState({})
    const [age, setAge] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (actorId) {
            getActor(actorId, token).then((res) => {
                console.log("===============")
                console.log(actorId)
                console.log(res)
                setActor(res)
                getActorAge(actorId, token).then((res) => {
                    setAge(res)
                    setLoad(true)
                })
                setLoad(true)
            })
        }
    }, [])

    const handleClick = () => {
        navigate('/actor/' + actorId)
    }

    if (load) {
        return (
            <ContainerDiv onClick={handleClick}>
                <ActorImage src={actor.image} />
                <Overlay></Overlay>
                <Marginer size={20}></Marginer>
                <Text>{actor.name}</Text>
                <Marginer size={10}></Marginer>
                <Text>{age}</Text>
            </ContainerDiv>
        )
    } else {
        return (
            <ComponentLoading />
        )
    }
}