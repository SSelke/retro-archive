import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_RESULTS } from './types';
import { FETCH_TERM } from './types';
import { FETCH_GAME } from './types';
import { SET_SEARCH_REDIRECT } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchSearchResults = (keyword, callback) => async dispatch => {
    const res = await axios.get(`/api/search?keyword=${keyword}`)
                await callback()
                dispatch({ type: FETCH_RESULTS, payload: res.data })
                dispatch({ type: FETCH_TERM, payload: keyword });

}

export const setGameShow = (id, callback) => async dispatch => {
    const res = await axios.get(`/api/find_game?id=${id}`)
                await callback()
                dispatch({ type: SET_SEARCH_REDIRECT, payload: res.data});
                dispatch({ type: FETCH_GAME, payload: res.data});
}

