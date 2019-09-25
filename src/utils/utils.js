// For main utilities, eg checking screen size, is phone/desktop, general string manipulation etc.
// If this scales, can split into more specific js files (eg 1 for devices, 1 for strings).

export const isMobile = () => {
    return (window.innerHeight / window.innerWidth) > 1.6;
}

var countryList = {
    SGP: "Singapore",
    MYS: "Malaysia",
    KOR: "Korea"
};

export const toCountryName = (abbr_) => {
    return countryList[abbr_];
}

export const toCountryABBR = (name_) => {
    return Object.keys(countryList).find(key => countryList[key] === name_);
}