//deals with the selections of keys
import {
    SELECT_KEY_INDEX,
    SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
    selectedKeyIndex: 0,
    selectedCapo: 7,
    capoKeyIndex: 7
};

export default (state = INITIAL_STATE, action) => {
    //best practice to switch state
    switch (action.type) {
        //if user selected an index
        case SELECT_KEY_INDEX: {
            //how to get the capoKeyIndex. action.payload is the new selectec key index
            let capoKeyIndex = state.selectedCapo + action.payload;
            //go back to the beginning when index >= 12 else stay
            // capoKeyIndex = capoKeyIndex >= 12 ? capoKeyIndex - 12 : capoKeyIndex;
            //another way of writing if statement, no else statement
            if (capoKeyIndex >= 12) capoKeyIndex -= 12;
            return {
                //return current state with new selected key
                ...state,
                selectedKeyIndex: action.payload,
                capoKeyIndex
            };
        }
        //if user selected a capo
        case SELECT_CAPO: {
            let capoKeyIndex = state.selectedKeyIndex + action.payload;
            if (capoKeyIndex >= 12) capoKeyIndex -= 12;
            return {
                //return current state with new selected capo
                ...state,
                selectedCapo: action.payload
            };
        }
        default:
            return state;

    }
};