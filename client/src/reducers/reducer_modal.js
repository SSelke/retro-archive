import { SHOW_MODAL } from '../action/types';
import { HIDE_MODAL } from '../action/types';

const initialState  = {
    modalType: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}