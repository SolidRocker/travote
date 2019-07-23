import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {fetchPlaces, updateSelectedPlace} from './attractionsMapAction';

const mapStylesPC = {
    width: '80%',
    height: '100%'
};

export class AttractionsMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 1.319190,
            longitude: 103.857834,
            distance: 3
        }
    }

    componentDidMount() {
        this.props.fetchPlaces(this.state.latitude, this.state.longitude, this.state.distance);
    }

    onMarkerClick = (props, marker, e) => {
        //console.log(props.placeData);
        this.props.updateSelectedPlace(props.placeData);
    }

    isMobile() {
        //return (window.innerHeight / window.innerWidth) > 1.6;
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

    render() {
        return (
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStylesPC}
                    initialCenter={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                >
                {this.props.places.map(place => this.renderMarkers(place))}
                </Map>
        );
    }
}

const mapStateToProps = state => ({
    places: state.attractions.places,
    /*selectedPlace: state.mapContainer.selectedPlace,

    masterCategoryList: state.filterSection.masterCategoryList,
    categoryList: state.filterSection.categoryList,
    zoneList: state.filterSection.zoneList,

    hasFilterData: state.filterSection.hasFilterData,
    filterType: state.filterSection.filterType,
    filterData: state.filterSection.filterData*/
});

export default connect(mapStateToProps, {fetchPlaces, updateSelectedPlace})(GoogleApiWrapper({
    apiKey: 'AIzaSyBNoS6JelKyYuk7R1iEyfKJ_h61YSIfjGs'
})(AttractionsMap));