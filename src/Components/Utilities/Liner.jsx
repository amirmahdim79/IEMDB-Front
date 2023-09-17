import React from 'react';
import styled from "styled-components";

const Line = styled.div`
    width: 70%;
    height: 1px;
    align-self: center;
`

const Line90 = styled.div`
    width: 90%;
    height: 1px;
    align-self: center;
`

export function Liner( { color } ) {
    return (
        <Line style={{backgroundColor: `${color}`}}></Line>
    )
}

export function Liner90( { color } ) {
    return (
        <Line90 style={{backgroundColor: `${color}`}}></Line90>
    )
}