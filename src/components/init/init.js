import React, {Component} from 'react';
import { connect } from 'react-redux';

import {initCountries} from './initAction';
  
export class InitApp extends Component {

    componentDidMount() {

        this.props.initCountries();
    }

    toCountryName(abbr) {

        for(var i = 0; i < this.props.countryIDs.length; ++i) {
            if(this.props.countryIDs[i] === abbr) {
                return this.props.countryNames[i];
            }
        }
        return "";
    }

    toCountryABBR(name) {

        for(var i = 0; i < this.props.countryNames.length; ++i) {
            if(this.props.countryNames[i] === name) {
                return this.props.countryIDs[i];
            }
        }
        return "";
    }
    
    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    countryIDs: state.countries.countryIDs,
    countryMarkers: state.countries.countryMarkers,
    countryNames: state.countries.countryNames,
    currCountry: state.countries.currCountry

});

export default connect(mapStateToProps, {initCountries})(InitApp);