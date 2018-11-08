import axios from 'axios';
import {
        FETCH_USER,
        FETCH_RESULTS,
        FETCH_TERM,
        FETCH_GAME,
        FETCH_GAME_LIST,
        ADD_TO_GAME_LIST,
        SET_USER,
        SET_SEARCH_REDIRECT,
        SET_SHOW_COLLECTION,
        SHOW_MODAL,
        HIDE_MODAL
       } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchSearchResults = (keyword, callback) => async dispatch => {
    const res = await axios.get(`/api/search?keyword=${keyword}`)
                callback()
                dispatch({ type: FETCH_RESULTS, payload: res.data })
                dispatch({ type: FETCH_TERM, payload: keyword });

}

export const fetchGameList = (id) => async dispatch => {
    const res = await axios.get(`/api/get_game_list?id=${id}&offset=0`)
                dispatch({ type: FETCH_GAME_LIST, payload: res.data });

}

export const addToGameList = (id, offset) => async dispatch => {
    const res = await axios.get(`/api/get_game_list?id=${id}&offset=${offset}`)
                dispatch({ type: ADD_TO_GAME_LIST, payload: res.data });
}
export const fetchCollections = () => async dispatch => {
    const res = await axios.get('/api/fetch_user')
        console.log("secondary");
                dispatch({ type: SET_USER, payload: res.data });

}

export const setShowCollection = (collection) => async dispatch =>  {
    dispatch({ type: SET_SHOW_COLLECTION, payload: collection });
}

export const setGameShow = (id, callback) => async dispatch => {
    console.log(id);
    const res = await axios.get(`/api/find_game?id=${id}`)
                callback()
                dispatch({ type: SET_SEARCH_REDIRECT, payload: res.data});
                dispatch({ type: FETCH_GAME, payload: res.data});
}

export const showModal = (type, props) => async dispatch => {
    dispatch({
        type: SHOW_MODAL,
        modalType: type,
        modalProps: props
    });
}   

export const hideModal = (type) => async dispatch => {
    dispatch({
        type: HIDE_MODAL,
        modalType: type
    });
}   

