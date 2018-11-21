import { SET_SHOW_COLLECTION, UPDATE_COLLECTION } from '../action/types';

export default function (state = null, action) {
    switch (action.type) {
        case null:
            return state;
        case undefined:
            return state;
        case SET_SHOW_COLLECTION:
            return action.payload || null;
        case UPDATE_COLLECTION:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}