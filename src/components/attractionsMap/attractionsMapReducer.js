import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE,
    UPDATE_USER_LOCATION
 } from '../../redux/types';
    
const dataState = {
    places: [],
    selectedPlace: {},
    hasSelection: false,

    userAbbr: 'NIL',
    userLat: 0.0,
    userLong: 0.0,
    userLocEnabled: false,
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
        case UPDATE_USER_LOCATION:
            return {
                ...state,
                userAbbr: action.payload_abbr,
                userLat: action.payload_lat,
                userLong: action.payload_long,
                userLocEnabled: action.payload_locEnabled,
            }
        default:
            return state;
    }
}


