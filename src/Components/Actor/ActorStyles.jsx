import styled from "styled-components";

export const ActorImage = styled.img `
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100%;
`

export const Overlay = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #b12070;
    border-radius: 100%;
`

export const Text = styled.p `
    color: white;
    font-size: 17px;
    text-align: center;
    opacity: 0;
    transition: 0.5s ease;
    position: relative;
    top: -140px;
    padding: 0 5px 0 5px;
`

export const ContainerDiv = styled.div `
    position: relative;
    width: 150px;
    height: 150px;
    box-shadow: 10px 10px 5px 1px #1b1b1b;
    cursor: pointer;
    border-radius: 100%;

    &:hover ${Overlay} {
        opacity: 0.5;
    }

    &:hover ${Text} {
        opacity: 1;
    }
`