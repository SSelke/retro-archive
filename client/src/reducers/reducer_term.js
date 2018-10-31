import { FETCH_TERM } from '../action/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_TERM:
            return action.payload;
        default:
            return state;
    }
}