import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE
 } from '../../redux/types';
    
const dataState = {
    places: [],
    selectedPlace: {},
    hasSelection: false
}

export default function(state = dataState, action) {
    switch(action.type) {
        case FETCH_PLACES:
            return {
                ...state,
                places: action.payload,
            }
        case UPDATE_SELECTED_PLACE:
            return {
                ...state,
                selectedPlace: action.payload,
                hasSelection: action.hasPayload
            }
        default:
            return state;
    }
}


