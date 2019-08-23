import React, { Component } from 'react';
import {connect} from 'react-redux';
import './attractionsTopTen.scss';

import {
    FaRegArrowAltCircleDown
} from 'react-icons/fa';

export class AttractionsInfo extends Component {


    render() {
         return (
            <div className="topten-section">

                <div> HI
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentCountry: state.countries.currCountry,
    places: state.attractions.places,
    selectedPlace: state.attractions.selectedPlace,
    hasSelection: state.attractions.hasSelection
});

export default connect(mapStateToProps, {})(AttractionsInfo);