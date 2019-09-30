import {
    INIT_COUNTRIES,
} from '../../redux/types';

import axios from 'axios';

export const initCountries = () => dispatch => {

    var IDs = [];
    var names = [];
    var markers = [];

    axios.get('https://5gfdlfwnjh.execute-api.ap-southeast-1.amazonaws.com/dev/countries?limit=20')
         .then(res => {
            for(var i = 0; i < res.data.length; ++i) {
                IDs.push(res.data[i].abbr);
                names.push(res.data[i].name);

                var newCoord = [];
                newCoord.push(res.data[i].xaxis);
                newCoord.push(res.data[i].yaxis);

                var newMarker = {
                    "markerOffset": -16,
                    "abbr": res.data[i].abbr,
                    "name": res.data[i].name,
                    "coordinates": newCoord
                }
                markers.push(newMarker);
            }

            dispatch({
                type: INIT_COUNTRIES,
                payload_IDs: IDs,
                payload_names: names,
                payload_markers: markers
            })
         });
}