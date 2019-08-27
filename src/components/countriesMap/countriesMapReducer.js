import {
    INIT_COUNTRIES,
    CHOOSE_COUNTRY
 } from '../../redux/types';
    
const countriesMapState = {
    countryIDs: [],
    countryNames: [],
    countryMarkers: [],

    currCountry: ""
}

export default function(state = countriesMapState, action) {
    switch(action.type) {
        case INIT_COUNTRIES:
            return {
                ...state,
                countryIDs: action.payload_IDs,
                countryNames: action.payload_names,
                countryMarkers: action.payload_markers
            }
        case CHOOSE_COUNTRY:
            return {
                ...state,
                currCountry: action.payload,
            }
        default:
            return state;
    }
}