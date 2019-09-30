import { combineReducers } from 'redux';
import countriesMapReducer from '../components/countriesMap/countriesMapReducer';
import attractionsMapReducer from '../components/attractionsMap/attractionsMapReducer';
import initReducer from '../components/init/initReducer';

export default combineReducers({
    countries: countriesMapReducer,
    attractions: attractionsMapReducer,
    init: initReducer
})