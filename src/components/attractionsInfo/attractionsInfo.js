import React, { Component } from 'react';
import {connect} from 'react-redux';
import './attractionsInfo.scss';

import {
    FaCommentAlt,
    FaClock,
    FaPhone,
    FaGlobeAmericas,
    FaEnvelope,
    FaHome,
    FaMapMarker,
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown
} from 'react-icons/fa';

export class AttractionsInfo extends Component {

    // Find hyperlinks in the string and convert them into clickable links.
    convertStringToLinks(str) {
        let result = [];
        let input = str.split(' ');

        input.forEach(elem => {
            if(elem.includes("http://") || elem.includes("https://")) {
                result.push(<a key={result.length} href={elem}>{elem}</a>);
            }
            else {
                result.push(elem);
            }
            result.push(' ');
        });
        return result;
    }

    registerVote(vote) {

        // SHIKANG: Check if user is logged in. If not, popup to login.
        // Votes can change, then numbers have to change also.
        // Display current amount of upvotes and downvotes.
        // If user already voted, highlight the vote he cast (either upvote or downvote)
        if(vote === 1) {
            console.log("Upvote");
        }
        else if(vote === -1) {
            console.log("Downvote");
        }
    }

    renderDefaultText() {
        if(this.props.places.length < 1) {
            return <div className="info-section-default-text">No places nearby. Are you sure you have the right coordinates?</div>
        }
        return <div className="info-section-default-text">Click on a pin to start!</div>
        }
    
    renderElements(infoString, infoVar) {
        if(this.props.selectedPlace.hasOwnProperty(infoString) && infoVar !== "-" && infoVar !== "") {

            switch(infoString) {

                case "img":
                    return (
                        <div>
                            <span><img className="info-section-img-src" src={infoVar} alt=""/> </span> 
                        </div>
                    )

                case "desc":
                    return (
                        <div className="info-section-info">
                            <div className="info-section-hr"><hr/></div>
                            <span className="info-section-icon"> <FaCommentAlt/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "hours":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaClock/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "contact":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaPhone/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "website":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "email":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaEnvelope/> </span>
                            <span><a href={"mailto:"+infoVar}>{infoVar}</a></span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "address":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaHome/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "zone":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaMapMarker/> </span>
                            <span>{infoVar}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "ext_1":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "ext_2":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                case "ext_3":
                    return (
                        <div className="info-section-info">
                            <span className="info-section-icon"> <FaGlobeAmericas/> </span>
                            <span>{this.convertStringToLinks(infoVar)}</span> 
                            <div className="info-section-hr"><hr/></div>
                        </div>
                    )

                default:
                    return null;
            }

        }
        return null;
    }

    renderVoteResults() {
        return (
            <div className="info-section-vote-results">
                <span className="info-section-vote-percent"> 54% </span>
                <span className="info-section-upvote-disp" onClick={ () => this.registerVote(1)}> <FaRegArrowAltCircleUp/> 13 </span>
                <span className="info-section-downvote-disp" onClick={ () => this.registerVote(-1)}> <FaRegArrowAltCircleDown/> 1867 </span>
            </div>
        )
    }

    render() {

        if(this.props.hasSelection) {
            return (
                <div className="info-section">
                
                    {this.renderElements("img", this.props.selectedPlace.img)}

                    <div className="info-section-headerbg">
                        <div className="info-section-header">{this.props.selectedPlace.name.toUpperCase()}</div>
                        <div className="info-section-category">{this.props.selectedPlace.category}</div>
                    </div>

                    {this.renderVoteResults()}

                    <div className="info-section-gap"></div>

                    {this.renderElements("desc", this.props.selectedPlace.desc)}
                    {this.renderElements("hours", this.props.selectedPlace.hours)}
                    {this.renderElements("contact", this.props.selectedPlace.contact)}

                    {this.renderElements("website", this.props.selectedPlace.website)}
                    {this.renderElements("email", this.props.selectedPlace.email)}

                    {this.renderElements("address", this.props.selectedPlace.address)}
                    {this.renderElements("zone", this.props.selectedPlace.zone)}

                    {this.renderElements("ext_1", this.props.selectedPlace.ext_1)}
                    {this.renderElements("ext_2", this.props.selectedPlace.ext_2)}
                    {this.renderElements("ext_3", this.props.selectedPlace.ext_3)}

                </div>
            )
        }
        return (
            <div className="info-section">
                <div className="info-section-icon">
                    {this.renderDefaultText()}
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