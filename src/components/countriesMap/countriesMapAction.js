import {
    CHOOSE_COUNTRY
} from '../../redux/types';

export const chooseCountries = (country) => dispatch => {
    console.log("C: " + country);
    dispatch({
        type: CHOOSE_COUNTRY,
        payload: country
    })
}
