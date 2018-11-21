import { SET_REDIRECT } from '../action/types';

export default function (state = "maybe", action) {
    switch (action.type) {
        case SET_REDIRECT:
            return action.payload || false;
        default:
            return state;
    }
}
