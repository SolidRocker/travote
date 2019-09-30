import React from 'react';
import {connect} from 'react-redux';
import {geolocated} from 'react-geolocated';
import {updateUserLocation} from '../components/attractionsMap/attractionsMapAction';

class GeoLocationClass extends React.Component {

    /* Vars
    this.props.isGeolocationAvailable -> Your browser does not support Geolocation
    !this.props.isGeolocationEnabled -> Geolocation is not enabled
    this.props.coords.latitude
    this.props.coords.longitude
    this.props.coords.altitude
    this.props.coords.heading
    this.props.coords.speed
    */

    render() {
        if(this.props.coords) {
            this.props.updateUserLocation(this.props.coords.latitude, this.props.coords.longitude, this.IsLocationEnabled());
        }
        else {
            this.props.updateUserLocation(0, 0, false);
        }
        return null;
    }

    IsLocationEnabled() {
        return this.props.isGeolocationAvailable && this.props.isGeolocationEnabled;
    }
}

export default connect(null, {updateUserLocation})(
    geolocated({
        positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    })(GeoLocationClass)
);