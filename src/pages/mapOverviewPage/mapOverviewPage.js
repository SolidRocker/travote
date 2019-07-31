import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import CountriesMap from '../../components/countriesMap/countriesMap';
import { FaArrowLeft } from 'react-icons/fa';
import './mapOverviewPage.scss'

class MapOverviewPage extends Component {

    render() {
        document.body.style = 'background: rgb(255, 255, 255);';
        return(
            <div className="countries-container">
                <div className="header-strip">
                    <Link to="/"> <FaArrowLeft className="back-arrow" />Back</Link>
                </div>
                <div className="instructions">Please choose your destination.</div>
                <CountriesMap/>
                <ReactTooltip/>
            </div>
        )
    }
}
export default MapOverviewPage;
           