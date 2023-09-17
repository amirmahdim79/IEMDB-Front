import React, { useState, useEffect } from 'react';
import {
    Button,
} from '@mui/material';
import { Marginer } from '../Utilities/Marginer';
import { FarsiText } from '../Global/FarsiText';
import styled from "styled-components";

const SortContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-right: 50px;
    font-size: 20px;
    text-align: center;
`

const SortOptions = styled.ul`
    list-style-type: none;
    margin-top: 20px;
    padding: 0;
    text-align: center;
    background-color: #b12025;
    border-radius: 20px;
    width: 200px;
`

const SortOption = styled.li`
    margin: 30px 0 30px 0;
    cursor: pointer;
    
    :hover {
        transition: 0.3s ease;
        font-size: 23px;
    }
`

export function SortBox({ handleSort }) {

    return (
        <SortContainer>
            <FarsiText>رتبه بندی بر اساس:</FarsiText>
            <SortOptions>
                <SortOption onClick={() => {handleSort('date')}}>
                    <FarsiText>تاریخ</FarsiText>
                </SortOption>
                <Marginer size={30} />
                <SortOption onClick={() => {handleSort('imdb')}}>
                    <FarsiText>امتیاز IMDB</FarsiText>
                </SortOption>
            </SortOptions>
        </SortContainer>
    )
}