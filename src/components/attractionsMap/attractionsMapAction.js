import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE,
    UPDATE_USER_LOCATION
} from '../../redux/types';

import axios from 'axios';
import {toCountryABBR} from '../../utils/utils';

export const fetchPlaces = (abbr_, latitude_, longitude_, distance_, limit_ = 1000) => dispatch => {

    var distConverted = 0.05; // temp fake dist

    var latDistance = distance_ / 111;                 // Distance is in km. 1 long degree = 111km.
    var longDistance = Math.cos(longitude_) * 111.32;  // The value is length per degree at the equator.

    // Get the places
    axios.get('https://5gfdlfwnjh.execute-api.ap-southeast-1.amazonaws.com/dev/places?abbr=' + abbr_ + '&long=' + longitude_ + '&lat=' + latitude_ + '&distance=' + distConverted + '&limit=' + limit_)
    .then(res => {
        dispatch({
            type: FETCH_PLACES,
            payload: res.data
        })
    });
}

export const updateSelectedPlace = (selectedPlace_, hasSelection_ = true) => dispatch => {

    dispatch({
        type: UPDATE_SELECTED_PLACE,
        payload: selectedPlace_,
        hasPayload: hasSelection_
    })
}

// Updates user location, which may be different from search radius.
export const updateUserLocation = (lat_, long_, isLocEnabled) => dispatch => {

    var finalLat = lat_;
    var finalLong = long_;
    var finalAbbr = '';
    
    // Tracks user location via IP
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        
        if(!isLocEnabled) {
            finalLat = data.latitude;
            finalLong = data.longitude;  
        }

        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + finalLat + ',' + finalLong + '&key=' + 'AIzaSyBNoS6JelKyYuk7R1iEyfKJ_h61YSIfjGs').then((response) => {
            
            let data = response.data.results[0].address_components;

            var foundCountry = false;
            for(var i = 0; i < data.length; ++i) {
                for(var j = 0; j < data[i].types.length; ++j) {
                    if(data[i].types[j] === 'country') {
                        foundCountry = true;
                        finalAbbr = toCountryABBR(data[i].long_name);
                        break;
                    }
                }

                if(foundCountry) {
                    break;
                }
            }
        }).then(() => {
        dispatch({
            type: UPDATE_USER_LOCATION,
            payload_abbr: finalAbbr,
            payload_lat: finalLat,
            payload_long: finalLong,
            payload_locEnabled: isLocEnabled
        })
    })})
}