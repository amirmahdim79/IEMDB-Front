import styled from "styled-components";

export const ContainerDiv = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a1a1a;
`

export const BoxContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    width: 600px;
    height: 500px;
    border-radius: 30px;
    background-color: #292929;
    box-shadow: 15px 20px 15px #b12025;
`

export const SubmitButton = styled.button `
    border-radius: 15px;
    width: 250px;
    background-color: #b12025;
    color: white;
    height: 45px;
    cursor: pointer;
    transition: 0.1s;

    :hover {
        background-color: #e64c51;
    }
`

export const SignupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 600px;
    justify-content: center;
    gap: 20px;
`

export const TextHolder = styled.div `
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 44px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    max-width: 100%;
    min-width: 100px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0px 5px 8px #888888;

    :active, :hover {
        outline: 0;
    }

    p {
        background-color: rgb(5, 6, 45);
        padding: 16px 24px;
        border-radius: 40px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    :hover p {
        background: none;
    }
    
    @media (min-width: 768px) {
        font-size: 24px;
        min-width: 196px;
    }
`

export const Line = styled.div `
    background-color: #535353;
    height: 3px;
    width: 90%;
    border-radius: 50px;
    opacity: 0.5;
`