import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

import CountriesMap from '../../components/countriesMap/countriesMap';
import './mapOverviewPage.scss'

class MapOverviewPage extends Component {

    render() {
        document.body.style = 'background: rgb(255, 255, 255);';
        return(
            <div className="countries-container">
                <div className="countries-instructions">Please choose your destination.</div>
                <CountriesMap/>
                <ReactTooltip/>
            </div>
        )
    }
}
export default MapOverviewPage;
           