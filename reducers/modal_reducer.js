import { 
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from '../actions/types';

const INITIAL_STATE = {
    chordModalIsOpen: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_CHORDS_MODAL:
            return { chordModalIsOpen: action.payload };
        case CLOSE_CHORDS_MODAL:
            return { chordModalIsOpen: action.payload };
        default:
            return state;
    }
}
