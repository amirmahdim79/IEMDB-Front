import React, { useState, useEffect } from 'react';
import {
    Chip,
    Divider,
    Typography,
    TextField,
} from '@mui/material';



export function validateUsername( username, setErrorUsername ) {
    if (username === null) {
        setErrorUsername("یوزرنیم نمیتونه خالی باشه")
        return false
    }
    if (username.length < 5) {
        setErrorUsername("یوزرنیم حداقال 8 حرفه")
        return false
    }

    return true
}

export function validatePassword( password, setErrorPassword, passwordRepeat = null ) {
    if (password === null) {
        setErrorPassword("رمز نمیتونه خالی باشه")
        return false
    }
    if (password.length < 8) {
        setErrorPassword("رمز حداقال 8 حرفه")
        return false
    }

    if (passwordRepeat !== null) {
        if (password !== passwordRepeat) {
            setErrorPassword("رمز و تکرار رمز یکی نیستن")
            return false
        }
    }

    return true
}

export function validateText( text, setTextError ) {
    if (text === '') {
        setTextError("این فیلد نباید خالی باشه")
        return false
    }

    return true
}

export function validateEmail( email, setEmailError ) {
    if (String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        return true
    } else {
        setEmailError('فرم ایمیل شما اشتباه است')
        return false
    }
    
}