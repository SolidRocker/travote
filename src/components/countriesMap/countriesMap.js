import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import {chooseCountries} from './countriesMapAction';
import './countriesMap.scss';
  
export class CountriesMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cx: 0,
            cy: 0,
            posUpdated: false,
        }
    }

    componentDidMount() {

        if(window.location.hostname === "localhost") {
            this.setState({mapPath: "/allcountries50.json"})
        }
        else {
            // The "travote" part is supposed to be a %PUBLIC_URL% variable,
            // but I couldn't get it working, so I hardcoded it.
            this.setState({mapPath: "/travote/allcountries50.json"})
        }

        setTimeout(() => {
          ReactTooltip.rebuild()
        }, 100)
    }

    componentDidUpdate() {

        // For some reason, we need to force update the position after the
        // first render to get it right.
        if(!this.state.posUpdated) {
            this.setState({
                cx: 105,
                cy: 20,
                posUpdated: true
            })
        }
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

    onClickCountry = (cntry) => {
        this.props.chooseCountries(cntry);
    }

    renderMarker = (marker, id) => {

        return(
        <Marker
            key={id}
            marker={marker}
            onClick={() => this.onClickCountry(marker.name)}
            style={{
                default: { fill: "#FF5722" },
                hover: { fill: "#FFFFFF" },
                pressed: { fill: "#FF5722" },
            }}
        >

        <circle
            cx={0}
            cy={0}
            r={8}
            data-tip={marker.name}
            style={{
                stroke: "#FF5722",
                strokeWidth: 6,
                opacity: 0.9,
            }}
        />
        
        <text
            textAnchor="middle"
            y={marker.markerOffset}
            style={{
                fontFamily: "Roboto, sans-serif",
                fontSize:"14px",
                fontStyle:"bold",
                fill: "#000080",
            }}
            >
            {marker.abbr}
        </text>

        </Marker>
        );
    }
    
    render() {
        
        if(this.props.currCountry !== "") {
            return <Redirect to="/attractions" />
        }

        return(
            <div className="cmap-container">
            <ComposableMap
                projectionConfig={{ scale: 400 }}
                width={window.innerWidth*0.9}
                height={window.innerHeight*0.9}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >

            <ZoomableGroup center={[ this.state.cx, this.state.cy ]} zoom={2} disablePanning>
                <Geographies geography={this.state.mapPath}>
                {(geographies, projection) =>
                    geographies.map((geography, i) => (
                    //console.log(geography.properties.NAME_EN + ", " + geography.properties.ADM0_A3),
                    this.props.countryIDs.indexOf(geography.properties.ADM0_A3) !== -1 &&
                    (
                    <Geography
                        key={i}
                        data-tip={geography.properties.NAME_EN}
                        onClick={() => this.onClickCountry(geography.properties.NAME_EN)}
                        geography={geography}
                        projection={projection}
                        style={{
                        default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                        },
                        hover: {
                            fill: "#607D8B",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                        },
                        pressed: {
                            fill: "#19BE7F",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                        },
                        }}
                    />
                    )))
                }
                </Geographies>

                 <Markers>
                    {this.props.countryMarkers.map(this.renderMarker)}
                </Markers>

            </ZoomableGroup>
            </ComposableMap> 
            </div>     
        );
    }
}

const mapStateToProps = state => ({
    countryIDs: state.countries.countryIDs,
    countryMarkers: state.countries.countryMarkers,
    countryNames: state.countries.countryNames,
    currCountry: state.countries.currCountry

});

export default connect(mapStateToProps, {chooseCountries})(CountriesMap);