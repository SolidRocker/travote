import {
    INIT_COUNTRIES,
    CHOOSE_COUNTRY
 } from '../../redux/types';

import {AllCountries} from '../../data/AllCountries'

export const initCountries = () => dispatch => {

    //SHIKANG: SAVE THE JS FILE DATA IN DB INSTEAD.

    var IDs = [];
    var names = [];
    var markers = [];

    for(var i = 0; i < AllCountries.length; ++i) {

        IDs.push(AllCountries[i].abbr);
        names.push(AllCountries[i].name);

        var newMarker = {
            markerOffset: -8,
            abbr: AllCountries[i].abbr,
            name: AllCountries[i].name,
            coordinates: [AllCountries[i].xaxis, AllCountries[i].yaxis]
        }
        markers.push(newMarker);
    }

    dispatch({
        type: INIT_COUNTRIES,
        payload_IDs: IDs,
        payload_names: names,
        payload_markers: markers
    })
}

export const chooseCountries = (country) => dispatch => {
    console.log("C: " + country);
    dispatch({
        type: CHOOSE_COUNTRY,
        payload: country
    })
}
