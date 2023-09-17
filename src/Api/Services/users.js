import { get, post, del } from '../index';

const api_dir_1 = "/api/users";
const api_dir_2 = "/api/movies";
const api_dir_3 = "/api/actors";
const api_dir_4 = "/api/comments";
const api_dir_5 = "/api/login";
const api_dir_6 = "/api/signUp";
const api_dir_7 = "/api/callback";

export function loginUser(data) {
    return post(`${api_dir_5}/`, data, null)
}

export function loginUserGit(code) {
    return post(`${api_dir_7}/?code=${code}`, null, null)
}

export function getOneUser(token) {
    return get(`${api_dir_1}/sara@ut.ac.ir`, token)
}

export function saveUser(email) {
    return post(`${api_dir_1}/save/${email}`, null)
}

export function signupUser(data) {
    return post(`${api_dir_6}/`, data, null)
}

export function getUserWatchlist(token) {
    return get(`${api_dir_1}/watchlist`, token)
}

export function getUserRecomList(token) {
    return get(`${api_dir_1}/recommended`, token)
}

export function getMovies(token) {
    return get(`${api_dir_2}`, token)
}

export function getMovieById(id, token) {
    return get(`${api_dir_2}/${id}`, token)
}

export function getMoviesSort(type, token) {
    return get(`${api_dir_2}/sort/${type}`, token)
}

export function getMoviesByGenre(genre, token) {
    return get(`${api_dir_2}/search/genre/${genre}`, token)
}

export function getMoviesByName(name, token) {
    return get(`${api_dir_2}/search/name/${name}`, token)
}

export function getMoviesByDate(start, end, token) {
    return get(`${api_dir_2}/search/date/${start}/${end}`, token)
}

export function rateMovie(data, token) {
    return post(`${api_dir_2}/rate`, data, token)
}

export function getActor(id, token) {
    return get(`${api_dir_3}/${id}`, token)
}

export function addComment(data, token) {
    return post(`${api_dir_4}`, data, token)
}

export function addToWatchlistUser(data, token) {
    return post(`${api_dir_1}/watchlist`, data, token)
}

export function deleteFromWatchlistUser(data, token) {
    return post(`${api_dir_1}/watchlist/delete`, data, token)
}

export function voteCommentUser(data, token) {
    return post(`${api_dir_4}/vote`, data, token)
}

export function getStarredMovies(id, token) {
    return get(`${api_dir_3}/starred/${id}`, token)
}

export function getActorAge(id, token) {
    return get(`${api_dir_3}/age/${id}`, token)
}