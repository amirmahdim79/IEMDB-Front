import styled from "styled-components";


export const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    min-width: 80%;
    min-height: 170px;
    height: 100%;
    border-radius: 25px;
    padding: 10px 15px 10px 15px;
`

export const CommentTitle = styled.p`
    font-size: 20px;
    margin-right: 30px;
    font-weight: bold;
    direction: rtl;
`

export const CommentInput = styled.textarea`
    text-align: right;
    font-size: 15px;
    min-height: 100px;
    max-width: 100%;
    margin: 10px 50px 10px 20px;
    direction: rtl;
`

export const SubmitButton = styled.button`
    width: 110px;
    height: 40px;
    background-color: #4ecb71;
    color: white;
    border-radius: 15px;
    font-size: 17px;
    cursor: pointer;
    transition: 0.1s;
    
    :active {
        background-color: #368a4e;
    }
`

export const CommentTextContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`