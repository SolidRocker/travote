import {
    INIT_COUNTRIES,
 } from '../../redux/types';
    
const initState = {
    countryIDs: [],
    countryNames: [],
    countryMarkers: [],
}

export default function(state = initState, action) {
    switch(action.type) {
        case INIT_COUNTRIES:
            return {
                ...state,
                countryIDs: action.payload_IDs,
                countryNames: action.payload_names,
                countryMarkers: action.payload_markers
            }
        default:
            return state;
    }
}