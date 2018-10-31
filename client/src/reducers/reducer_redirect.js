import { SET_SEARCH_REDIRECT } from '../action/types';

export default function (state = "maybe", action) {
    switch (action.type) {
        case SET_SEARCH_REDIRECT:
            if (action.payload === undefined || action.payload.length === 0) {
                return true;
            } else {
                return false;
            }
        default:
            return state;
    }
}
