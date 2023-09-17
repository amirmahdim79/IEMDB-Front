import axios from 'axios';
import React from "react";
import { toast } from 'react-toastify';

const client = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const get = (path, token) => {
    let headers = {
    }

    if (token) {
        headers = {
            "Authorization": `${token}`
        }
    }

    const onSuccess = (response) => {
        console.error('Get Request Successful!')
        return response.data
    }

    const onError = (error) => {
        console.log(headers)
        console.error('Get Request Failed:')

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            toast.error(error.response.data.Message ? error.response.data.Message : error.response.data.message)
            console.error('Headers:', error.response.headers);

        } else {
            console.error('Error Message ---------------:', error.message);
            // window.location.reload()
        }

        return Promise.reject(error.response || error.message)
    }

    return client.get(path, {
        params: null,
        headers
    })
    .then(onSuccess)
    .catch(onError)
}

export function post(path, data, token, params) {
    let headers = {}
    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    } else {
        headers = {
            'Content-Type': 'application/json',
        }
    }

    const onSuccess = (response) => {
        console.error('Post Request Successful!')
        return response.data
    }

    const onError = (error) => {
        console.error('Post Request Failed:')

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            toast.error(error.response.data.Message ? error.response.data.Message : error.response.data.message)
            console.error('Headers:', error.response.headers);

        } else {
            console.error('Error Message ---------------:', error.message);
            // window.location.reload()
        }

        return Promise.reject(error.response || error.message)
    }

    return client.post(path, data, {
        headers,
        params
    })
        .then(onSuccess)
        .catch(onError);
}

export function patch(path, data, token, params) {
    let headers = {}
    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    } else {
        headers = {
            'Content-Type': 'application/json',
        }
    }

    const onSuccess = (response) => {
        console.error('Patch Request Successful!')
        return response.data
    }

    const onError = (error) => {
        console.error('Patch Request Failed:')

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            toast.error(error.response.data.Message ? error.response.data.Message : error.response.data.message)
            console.error('Headers:', error.response.headers);

        } else {
            console.error('Error Message ---------------:', error.message);
            window.location.reload()
        }

        return Promise.reject(error.response || error.message)
    }

    return client.patch(path, data, {
        headers,
        params
    })
        .then(onSuccess)
        .catch(onError);
}

export function del(path, data, token, params) {
    let headers = {}
    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    } else {
        headers = {
            'Content-Type': 'application/json',
        }
    }

    const onSuccess = (response) => {
        console.error('Patch Request Successful!')
        return response.data
    }

    const onError = (error) => {
        console.error('Patch Request Failed:')

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            toast.error(error.response.data.Message ? error.response.data.Message : error.response.data.message)
            console.error('Headers:', error.response.headers);

        } else {
            console.error('Error Message ---------------:', error.message);
            window.location.reload()
        }

        return Promise.reject(error.response || error.message)
    }

    return client.delete(path, data, {
        headers,
        params
    })
        .then(onSuccess)
        .catch(onError);
}