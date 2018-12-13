import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from './types';

//exporting the action, if open payload will be true : false
export const openChordsModal = () => {
    //this way instead of arrow body so we can plug in console log or print() before the return
    return {
        type: OPEN_CHORDS_MODAL,
        payload: true
    };
};

// //exporting the action, if open payload will be true : false
// export const closeChordsModal = () => ({
//     type: CLOSE_CHORDS_MODAL,
//     payload: false
// });

//exporting the action, if open payload will be true : false
export const closeChordsModal = () => {
    console.log("Close button clicked");
    return {
        type: CLOSE_CHORDS_MODAL,
        payload: false
    };      
};