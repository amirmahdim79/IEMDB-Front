import React, { useState, useEffect } from 'react';
import { CustomInput } from '../../Components/CustomInputs/CustomInput';
import { Liner } from '../../Components/Utilities/Liner';
import { Marginer } from '../../Components/Utilities/Marginer';
import { BoxContainer, ContainerDiv, SignupContainer, SubmitButton } from './LoginSignupPageStyles';
import {
    Button,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Loading } from '../../Components/Utilities/Loading';
import { loginUser, saveUser, signupUser } from '../../Api/Services/users';
import { validateEmail } from '../../Components/CustomInputs/Validation';

export function LoginSignupPage( { notify, login, token, setToken } ) {
    const [load, setLoad] = useState(true)
    const navigate = useNavigate();
    const [mode, setMode] = useState(login)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState('')
    const [email, setEmail] = useState('')

    const [name, setName] = useState('')
    const [repeat, setRepeat] = useState('')
    const [nickname, setNickname] = useState('')
    const [birthDate, setBirthDate] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('iemdbToken');
        if (localToken) {
            setToken(localToken)
            navigate('/')
        }
    }, []);

    const switchMode = () => {
        setMode(mode ? false : true)
    }

    const handleLogin = () => {
        let data = {
            email: email,
            password: password
        }
        loginUser(data).then((res) => {
            console.log(res)
            if (res !== 'Wrong Credentials !!') {
                localStorage.setItem('iemdbToken', res);
                localStorage.setItem('iemdbEmail', email);
                setToken(res)
                notify('با موفقیت وارد شدی')
                navigate("/");
            } else {
                notify('رمز اشتباه است')
            }
        }).catch((err) => {
            notify('این یوزر وجود ندارد')
        })
        
    }

    const handleValidation = () => {
        if (validateEmail(email, setErrorEmail) === true) {
            handleLogin()
        } else {
        }
    }

    const handleSignup = () => {
        let data = {
            email: email,
            password: password,
            username: nickname,
            name: name,
            birthDate: birthDate
        }
        console.log(data)
        signupUser(data).then((res) => {
            console.log(res)
            localStorage.setItem('iemdbToken', res);
            localStorage.setItem('iemdbEmail', email);
            setToken(res)
            notify('با موفقیت ثبت نام کردید')
            navigate("/");
        }).catch((err) => {
            console.log(err)
            notify('مشکلی پیش آمده دوباره امتحان کنید')
        })
    }

    const handleValidationSignup = () => {
        if (validateEmail(email, setErrorEmail) === true) {
            if (name === '' || password === '' || repeat === '' || email === '' || nickname === '' || birthDate === '' ) {
                notify('لطفا تمامی فیلد ها را پر کنید')
            } else {
                if (repeat === password) {
                    handleSignup()
                } else {
                    notify('رمز و تکرار رمز باهم یکی نیستند')
                }
            }
        } else {
        }
    }
    
    const handleGit = () => {
        window.location.replace('https://github.com/login/oauth/authorize?client_id=59f2d7785b298f48379a&scope=user');
    }

    return (
        <ContainerDiv>
            {load && mode && (
                <BoxContainer>
                    <CustomInput
                        name={'ایمیل'}
                        value={email}
                        setValue={setEmail}
                        error={errorEmail}
                    />
                    <Marginer size={'10'}></Marginer>
                    <CustomInput
                        name={'رمز'}
                        type={'password'}
                        value={password}
                        setValue={setPassword}
                    />
                    <Marginer size={'10'}></Marginer>
                    <SubmitButton onClick={handleValidation}>
                        ورود
                    </SubmitButton>
                    <Marginer size={'30'}></Marginer>
                    <Liner color={'#b12025'} />
                    <Marginer size={'30'}></Marginer>
                    <Button
                        variant="text"
                        sx={{
                            color: '#b12025',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}
                        onClick={switchMode}
                    >
                        ثبت نام
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            color: '#b12025',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}
                        onClick={handleGit}
                    >
                        ورود با گیت هاب
                    </Button>
                </BoxContainer>
            )}
            {load && !mode && (
                <BoxContainer>
                    <SignupContainer>
                        <CustomInput
                            name={'اسم'}
                            value={name}
                            setValue={setName}
                        />
                        <CustomInput
                            name={'رمز'}
                            type={'password'}
                            value={password}
                            setValue={setPassword}
                        />
                        <CustomInput
                            name={'تکرار رمز'}
                            type={'password'}
                            value={repeat}
                            setValue={setRepeat}
                        />
                        <CustomInput
                            name={'ایمیل'}
                            type={'email'}
                            value={email}
                            setValue={setEmail}
                            error={errorEmail}
                        />
                        <CustomInput
                            name={'نام کاربری'}
                            value={nickname}
                            setValue={setNickname}
                        />
                        <CustomInput
                            name={'تاریخ تولد'}
                            type={'date'}
                            value={birthDate}
                            setValue={setBirthDate}
                        />
                    </SignupContainer>
                    <Marginer size={'10'}></Marginer>
                    <SubmitButton onClick={handleValidationSignup}>
                        ثبت نام
                    </SubmitButton>
                    <Marginer size={'10'}></Marginer>
                    <Liner color={'#b12025'} />
                    <Marginer size={'10'}></Marginer>
                    <Button
                        variant="text"
                        sx={{
                            color: '#b12025',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}
                        onClick={switchMode}
                    >
                        ورود
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            color: '#b12025',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}
                        onClick={handleGit}
                    >
                        ورود با گیت هاب
                    </Button>
                </BoxContainer>
            )}
            {!load && (
                <Loading />
            )}
        </ContainerDiv>
    )
}