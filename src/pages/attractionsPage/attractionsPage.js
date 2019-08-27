import React, {Component} from 'react';
import { connect } from 'react-redux';

import './attractionsPage.scss'
import AttractionsMap from '../../components/attractionsMap/attractionsMap';
import {chooseCountries} from '../../components/countriesMap/countriesMapAction';

class AttractionsPage extends Component {

    goBack = (name) => {
        this.props.chooseCountries("");
    }

    render() {
        document.body.style = 'background: rgb(255, 255, 255);';
        return(
            <div className="attractions-container">
                <AttractionsMap className="attractions-maps" />
            </div>
        )
    }
}
export default connect(null, {chooseCountries})(AttractionsPage);