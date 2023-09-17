import styled from "styled-components";

export const ContainerDiv = styled.div `
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #292929;
`

export const BoxContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top:70px;
`

export const ActorProfileImage = styled.img`
    max-width: 300px;
    height: 100%;
    display: flex;
    max-height: 600px;
    object-fit: cover;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
`

export const InformationTitle = styled.p`
    text-align: center;
    margin-bottom: 20px;
    color: white;
    direction: rtl;
`

export const InformationText = styled.p`
    color: white;
    direction: rtl;
    margin-bottom: 20px;
    margin-right: 50px;
    align-self: flex-end;
`

export const MoviesSection = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const MoviesContainer = styled.div`
    gap: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 90%;
    background-color: #4e4e50;
    padding: 40px 100px 40px 100px;
    margin-top: 20px;
    border-radius: 25px;
    margin-bottom: 70px;
`