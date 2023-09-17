import styled from "styled-components";

export const ContainerDiv = styled.div `
    background-color: #4e4e50;
    box-shadow: 10px 10px 5px 1px #1b1b1b;
    width: 700px;
    height: 170px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
`

export const MoviePoster = styled.img`
    display: flex;
    object-fit: cover;
    width: 130px;
    height: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    cursor: pointer;
`

export const MovieTitle = styled.p`
    font-size: 20px;
    margin: 10px 0px 0px 20px;
    width: 500px;
    color: white;
`

export const Ratings = styled.div`
    margin: 30px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
`

export const RatingInfo = styled.div`
    color: white;
    direction: rtl;
    font-size: 15px;
    margin-bottom: 30px;
`

export const Information = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 15px;
    margin-top: 10px;
`