import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

import {fetchPlaces, updateSelectedPlace} from './attractionsMapAction';
import AttractionsInfo from '../attractionsInfo/attractionsInfo';
import AttractionsTopTen from '../attractionsTopTen/attractionsTopTen';

const mapStylesPC = {
};

export class AttractionsMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            distance: 3,
            isInit: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!this.state.isInit && nextProps.userLat !== 0) {
            this.props.fetchPlaces(nextProps.userAbbr, nextProps.userLat, nextProps.userLong, this.state.distance);
            this.setState({isInit: true});
        }
    }

    onMarkerClick = (props, marker, e) => {
        //console.log(props.placeData);
        this.props.updateSelectedPlace(props.placeData);
    }

    renderMarkers(place) {

        return (
            <Marker
                key={place.id}
                title={place.name}
                name={place.name}
                position={{lat: place.lat, lng: place.long}}
                placeData={place}
                onClick={this.onMarkerClick}
            />
        )
    }

    renderUserLocation() {
        if(!this.props.userLocEnabled) {
            return null;
        }
        
        return (
            <Marker
                key={0}
                title={"My location"}
                name={"My location"}
                position={{lat: this.props.userLat, lng: this.props.userLong}}
                icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
                    anchor: new this.props.google.maps.Point(32, 32),
                    //scaledSize: new this.props.google.maps.Size(64,64)
                  }}
            />
        )
    }

    render() {

        return (
            <div className="map-section">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStylesPC}
                    center={{
                        lat: this.props.userLat,
                        lng: this.props.userLong
                    }}
                >
                {this.props.places.map(place => this.renderMarkers(place))}
                {this.renderUserLocation()}

                <AttractionsInfo/>
                <AttractionsTopTen/>

                </Map>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    places: state.attractions.places,
    userAbbr: state.attractions.userAbbr,
    userLat: state.attractions.userLat,
    userLong: state.attractions.userLong,
    userLocEnabled: state.attractions.userLocEnabled,
});

export default connect(mapStateToProps, {fetchPlaces, updateSelectedPlace})(GoogleApiWrapper({
    apiKey: 'AIzaSyBNoS6JelKyYuk7R1iEyfKJ_h61YSIfjGs'
})(AttractionsMap));