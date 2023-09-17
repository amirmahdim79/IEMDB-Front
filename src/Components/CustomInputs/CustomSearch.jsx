import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";

const SearchBar = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    width: 300px;
    border-radius: 15px;
`

const Search = styled.input `
    text-align: left;
    padding-left: 10px;
    font-size: 17px;
    border-radius: 15px;
    background-color: white;
    width: 250px;
    height: 45px;
`

export function CustomSearchBar({ handleSearch, value, setValue }) {
    return (
        <SearchBar>
            <Search value={value} onChange={(event) => setValue(event.target.value)} />
            <SearchIcon onClick={handleSearch} sx={{color: '#b12025'}} />
        </SearchBar>
    )
}
