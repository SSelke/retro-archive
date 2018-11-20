import { SET_USER } from '../action/types';

export default function (state = false, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload || false;
        default:
            return state;
    }
}