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
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
`

export const MovieBackground = styled.img `
    display: flex;
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: top;
`

export const MovieImage = styled.img `
    display: flex;
    width: 200px;
    height: 100%;
`

export const MovieContainer = styled.div `
    position: relative;
    top: -200px;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const MovieInfo = styled.div`
    margin: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const MovieTitle = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    direction: rtl;
    color: white;
    font-weight: bold;
`

export const Information = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 60px;
`

export const InfoText = styled.p`
    direction: rtl;
    color: white;
    margin-bottom: 20px;
`

export const Bio = styled.p`
    direction: rtl;
    color: white;
    text-align: right !important;
    line-height: 30px;
    width: 100%;
`

export const ActorContainer = styled.div`
    position: relative;
    gap: 150px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    max-width: 60%;
    background-color: #4e4e50;
    padding: 40px 100px 40px 100px;
    border-radius: 25px;
`

export const CommentSection = styled.div`
    gap: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 60%;
    background-color: #4e4e50;
    padding: 15px 0px 40px 0px;
    border-radius: 25px;
    margin-bottom: 200px;
`

export const AddButton = styled.button`
    color: white;
    position: absolute;
    background-color: #b12025;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    top: 320px;
    left: 25px;
    font-size: 17px;
    cursor: pointer;
    transition: 0.1s;
    
    :active {
        background-color: #6e1518;
    }
`