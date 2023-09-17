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
    align-items: center;
    flex-direction: column;
    margin-top: 170px;
`

export const RecomContainer = styled.div`
    background-color: #4e4e50;
    width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 130px;
    margin-bottom: 300px;
`

export const RecomTitle = styled.p `
    margin-top: 20px;
    font-size: 20px;
    color: white;
    direction: rtl;
`

export const RecomMovies = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 50px;
    justify-content: flex-start;
    padding: 40px 100px 80px 100px;
`