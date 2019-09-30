// For main utilities, eg checking screen size, is phone/desktop, general string manipulation etc.
// If this scales, can split into more specific js files (eg 1 for devices, 1 for strings).

import store from '../redux/store';

export const isMobile = () => {
    return (window.innerHeight / window.innerWidth) > 1.6;
}

export const toCountryName = (abbr_) => {

    var rStore = store.getState();
    for(var i = 0; i <  rStore.init.countryIDs.length; ++i) {
        if( rStore.init.countryIDs[i] === abbr_) {
            return  rStore.init.countryNames[i];
        }
    }
    return "";
}

export const toCountryABBR = (name_) => {

    var rStore = store.getState();
    for(var i = 0; i < rStore.init.countryNames.length; ++i) {
        if(rStore.init.countryNames[i] === name_) {
            return rStore.init.countryIDs[i];
        }
    }
    return "";
}