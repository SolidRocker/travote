import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE
} from '../../redux/types';

import {data} from '../../data/allPlaces';
import axios from 'axios';

/*function hasData(data_) {
    return data_ !== '' && data_ !== '-';
}*/

export const fetchPlaces = (latitude, longitude, distance//,
                            //masterCategoryList, categoryList, zoneList
                            ) => dispatch => {
    /*
    axios.get('https://5gfdlfwnjh.execute-api.ap-southeast-1.amazonaws.com/dev/places?abbr=SGP&limit=100')
         .then(res => {
             dispatch({
                 type: FETCH_PLACES,
                 payload: res.data
             })
         });
         */
    
    var newPlaces = [];
    for(var i = 0; i < data.length; ++i) {
        newPlaces.push(data[i]);
    }

    dispatch({
        type: FETCH_PLACES,
        payload: newPlaces
    })
    
}

export const updateSelectedPlace = (selectedPlace, hasSelection = true) => dispatch => {

    dispatch({
        type: UPDATE_SELECTED_PLACE,
        payload: selectedPlace,
        hasPayload: hasSelection
    })
}