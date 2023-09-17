import styled from "styled-components";

export const NavbarContainer = styled.div `
    background-color: #b12025;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    left:0;
    right: 0;
`

export const NavbarIcon = styled.img `
    display: flex;
    width: 70px;
    height: 70px;
    cursor: pointer;
`

export const NavbarSearchContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 200px;
`

export const FilterSelect = styled.select `
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-family: Arial;
    margin-right: 30px;
    background-color: white;
    border-radius: 15px;
`

export const FilterStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginRight: '30px',
    backgroundColor: 'white',
    borderRadius: '15px',
    border: 'none',
    width: '200px',
    height: '47px',
    direction: 'rtl',
}

export const MenuItemStyle = {
    backgroundColor: '#b12025',
    color: 'white',
    direction: 'rtl',

    '&:hover' : {
        backgroundColor: '#e94449',
        color: 'white',
    },
    '&:focus' : {
        backgroundColor: '#e94449',
        color: 'white',
    },
    '&:focus:hover' : {
        backgroundColor: '#e94449',
        color: 'white',
    },
    '&:active' : {
        backgroundColor: '#e94449',
        color: 'white',
    }
}