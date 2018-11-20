import axios from 'axios';
import {
        FETCH_USER,
        FETCH_RESULTS,
        FETCH_TERM,
        FETCH_GAME,
        FETCH_GAME_LIST,
        ADD_TO_GAME_LIST,
        ADD_TO_GAME_COLLECTION,
        PUSH_GAME,
        DELETE_RECENT_GAMES,
        DELETE_GAME,
        DELETE_COLLECTION,
        SET_SEARCH_REDIRECT,
        SET_SHOW_COLLECTION,
        SHOW_MODAL,
        SET_USER,
        HIDE_MODAL,
        UPDATE_RECENT_GAMES
       } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const getUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: SET_USER, payload: res.data });
};

export const fetchSearchResults = (keyword) => async dispatch => {
    const res = await axios.get(`/api/search?keyword=${keyword}`)
                dispatch({ type: FETCH_RESULTS, payload: res.data })
                dispatch({ type: FETCH_TERM, payload: keyword });

};

export const fetchGameList = (id) => async dispatch => {
    const res = await axios.get(`/api/get_game_list?id=${id}&offset=0`)
                dispatch({ type: FETCH_GAME_LIST, payload: res.data });

};

export const addToGameList = (id, offset) => async dispatch => {
    const res = await axios.get(`/api/get_game_list?id=${id}&offset=${offset}`)
                dispatch({ type: ADD_TO_GAME_LIST, payload: res.data });
};

export const setShowCollection = (collection) => async dispatch =>  {
    dispatch({ type: SET_SHOW_COLLECTION, payload: collection });
};

export const setGameShow = (id) => async dispatch => {
    const res = await axios.get(`/api/find_game?id=${id}`)
                dispatch({ type: SET_SEARCH_REDIRECT, payload: res.data});
                dispatch({ type: FETCH_GAME, payload: res.data});
};

export const showModal = (type, props) => async dispatch => {
    dispatch({
        type: SHOW_MODAL,
        modalType: type,
        modalProps: props
    });
};  

export const hideModal = (type) => async dispatch => {
    dispatch({
        type: HIDE_MODAL,
        modalType: type
    });
};

export const pushGameToCollections = (ids, game) => async dispatch => {
    dispatch({
        type: PUSH_GAME,
        game: game,
        ids: ids
    });
};

export const deleteCollection = (id) => async dispatch => {
    dispatch({
        type: DELETE_COLLECTION,
        payload: id
    });
    dispatch({
        type: DELETE_RECENT_GAMES
    });
};

export const pullGame = (id, collection_id) => async dispatch => {
    await axios.delete(`/api/delete_game?id=${id}&collectionID=${collection_id}`);
    dispatch({
        type: DELETE_GAME,
        game_id: id,
        collection_id
    });
};

export const updateRecentGames = (ids, game) => async dispatch => {
    await axios.post("/api/addGameToCollections", { ids, game });
    await axios.post("/api/addGameToRecentlyAdded", { game });
    dispatch({
        type: ADD_TO_GAME_COLLECTION,
        game,
        ids
    });
    dispatch({
        type: UPDATE_RECENT_GAMES,
        payload: game
    });
};


