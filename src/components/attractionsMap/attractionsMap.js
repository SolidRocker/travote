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
            latitude: 1.319190,
            longitude: 103.857834,
            distance: 3,
        }
    }

    componentDidMount() {
        if(this.props.userLocEnabled) {
            this.props.fetchPlaces(this.props.userLat, this.props.userLong, this.state.distance);
        }
        else {
            this.props.fetchPlaces(this.state.latitude, this.state.longitude, this.state.distance);
        }
    }

    onMarkerClick = (props, marker, e) => {
        //console.log(props.placeData);
        this.props.updateSelectedPlace(props.placeData);
    }

    renderMarkers(place) {
        //console.log(place);

       /* if(this.props.hasFilterData) {

            if( this.props.filterType === "Master Category" &&
                this.props.filterData !== place.MasterCategory) {
                    return;
            }

            if( this.props.filterType === "Category" &&
                this.props.filterData !== place.Category) {
                    return;
            }

            if( this.props.filterType === "Zone" &&
                this.props.filterData !== place.Zone) {
                    return;
            }
        }*/

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

        var cLat = this.state.latitude;
        var cLong = this.state.longitude;
        
        if(this.props.userLocEnabled) {
            cLat = this.props.userLat;
            cLong = this.props.userLong;
        }

        return (
            <div className="map-section">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStylesPC}
                    center={{
                        lat: cLat,
                        lng: cLong
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
    userLat: state.attractions.userLat,
    userLong: state.attractions.userLong,
    userLocEnabled: state.attractions.userLocEnabled
});

export default connect(mapStateToProps, {fetchPlaces, updateSelectedPlace})(GoogleApiWrapper({
    apiKey: 'AIzaSyBNoS6JelKyYuk7R1iEyfKJ_h61YSIfjGs'
})(AttractionsMap));