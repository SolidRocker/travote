import {
    CHOOSE_COUNTRY
} from '../../redux/types';
    
const countriesMapState = {
    currCountry: ""
}

export default function(state = countriesMapState, action) {
    switch(action.type) {
        case CHOOSE_COUNTRY:
            return {
                ...state,
                currCountry: action.payload,
            }
        default:
            return state;
    }
}