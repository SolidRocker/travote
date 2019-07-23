import {
    FETCH_PLACES,
    UPDATE_SELECTED_PLACE
} from '../../redux/types';

import {data} from '../../data/allPlaces';

/*function hasData(data_) {
    return data_ !== '' && data_ !== '-';
}*/

export const fetchPlaces = (latitude, longitude, distance//,
                            //masterCategoryList, categoryList, zoneList
                            ) => dispatch => {
    
    /* SHIKANG: Convert to fetch json data
    let path = 'https://www.dropbox.com/home/Public/places.json';// + latitude + '/' + longitude + '/' + distance;
    fetch(path)
    .then(res => res.json())
    .then(data => {
        // Extract Filter Data
        /*for(var i = 0; i < data.length; ++i) {

        dispatch({
            type: FETCH_PLACES,
            payload: data
        })
        }
    );*/

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