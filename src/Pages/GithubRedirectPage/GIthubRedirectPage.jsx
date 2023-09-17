import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { loginUserGit } from '../../Api/Services/users';

export function GitRedirect( { notify, token, setToken} ) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        console.log(searchParams.get('code'))
        loginUserGit(searchParams.get('code')).then((res) => {
            console.log(res)
            setToken(res)
            localStorage.setItem('iemdbToken', res);
            localStorage.setItem('iemdbEmail', 'Logout');
            notify('با موفقیت وارد شدی')
            navigate('/')
        }).catch((err) => {
            console.log(err)
            navigate('/')
        })
    }, [])

    return (
        <div>
        </div>
    )
}