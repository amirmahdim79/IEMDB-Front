import styled from "styled-components";

export const ContainerDiv = styled.div `
    background-color: rgba(177, 32, 37, 0.8);
    min-width: 200px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Rating = styled.p`
    direction: rtl;
    font-size: 40px;
    color: white;
    font-weight: bold;
    margin-bottom: 50px;
`

export const StarContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    position: relative;
    flex-direction: row;
    background-color: rgba(177, 32, 37, 0.8);
    width: 360px;
    height: 30px;
    border-radius: 25px;
    margin-bottom: 20px;
`