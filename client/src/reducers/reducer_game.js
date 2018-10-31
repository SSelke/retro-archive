import { FETCH_GAME } from '../action/types';


export default function (state = null, action) {
    switch (action.type) {
        case FETCH_GAME:
            //Check weather search results are there
            if (action.payload === undefined || action.payload.length === 0) {
                return state;
            } else {
                //Returned array due to api workaround.
                //Pop out desired object
                const result = action.payload.pop();
                return result;
            }
        default:
            return state;
    }
}