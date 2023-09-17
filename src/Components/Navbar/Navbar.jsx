import React, { useState, useEffect } from 'react';
import { FilterSelect, FilterStyle, MenuItemStyle, NavbarContainer, NavbarIcon, NavbarSearchContainer } from './NavbarStyles';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CustomSearchBar } from '../CustomInputs/CustomSearch';
import {
    Select,
    MenuItem,
    Button,
    Menu,
} from '@mui/material';
import { logoutUser } from '../../Api/Services/users';

export function Navbar( { search, login, setToken, searchFunc, notify } ) {
    const navigate = useNavigate();
    const [mode, setMode] = useState(login)
    const [password, setPassword] = useState(null)
    const [filter, setFilter] = useState(null)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [word, setWord] = useState('')
    const open = Boolean(anchorEl);
    const [email, setEmail] = useState('')

    useEffect(() => {
        setEmail(localStorage.getItem('iemdbEmail'))
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleIconClick = () => {
        navigate('/')
    }

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    const handleLogout = () => {
        handleClose()
        localStorage.removeItem('iemdbToken');
        localStorage.removeItem('iemdbEmail');
        setToken(null)
        navigate('/login')
        notify('با موفقیت خارج شدید')
    }

    const handleWatchlist = () => {
        handleClose()
        navigate('/watchlist')
    }

    const handleSearch = () => {
        searchFunc(filter, word)
    }

    return (
        <NavbarContainer>
            <NavbarIcon onClick={handleIconClick} src={process.env.PUBLIC_URL + '/icon/template.png'} />
            {search && (
                <NavbarSearchContainer>
                    <Select
                        value={filter}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={FilterStyle}
                    >
                        <MenuItem sx={MenuItemStyle} value="0">
                            <em>جستجو بر اساس:</em>
                        </MenuItem>
                        <MenuItem value={1} sx={MenuItemStyle} >نام</MenuItem>
                        <MenuItem value={2} sx={MenuItemStyle} >ژانر</MenuItem>
                        <MenuItem value={3} sx={MenuItemStyle} >تاریخ انتشار</MenuItem>
                    </Select>
                        
                    <CustomSearchBar value={word} setValue={setWord} handleSearch={handleSearch}/>
                </NavbarSearchContainer>
            )}
            <Button
                onClick={handleClick}
            >
                <AccountCircleIcon sx={{color: '#292929', fontSize: '50px'}} />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem sx={MenuItemStyle} onClick={handleLogout}>{email}</MenuItem>
                <MenuItem sx={MenuItemStyle} onClick={handleWatchlist}>Watchlist</MenuItem>
            </Menu>
        </NavbarContainer>
    )
}