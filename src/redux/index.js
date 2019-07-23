import { combineReducers } from 'redux';
import countriesMapReducer from '../components/countriesMap/countriesMapReducer';
import attractionsMapReducer from '../components/attractionsMap/attractionsMapReducer';

export default combineReducers({
    countries: countriesMapReducer,
    attractions: attractionsMapReducer
})