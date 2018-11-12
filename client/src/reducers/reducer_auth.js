import { FETCH_USER, PUSH_GAME } from '../action/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        // case PUSH_GAME:
        //     let newState = {...state};
        //     newState.collections.forEach((collection) => {
        //         if (action.ids.some(id => id === collection._id)) {
        //             console.log(collection._id );
        //             return;
        //         } else {
        //             console.log(collection.gamesCollected);
        //             collection.gamesCollected.push(action.game); //NOT WORKING
        //         }
        //     });
        //     console.log(newState);
        //     return newState;
        default:
            return state;
    }
}
