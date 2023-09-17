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
    justify-content: space-around;
    flex-direction: row;
    margin-top: 170px;
`

export const MoviesContainer = styled.div `
    gap: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 70%;
    margin-bottom: 200px;
`

export const Navbar = styled.div `
    background-color: #b12025;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
`