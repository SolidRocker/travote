import React, { Component } from 'react';
import {connect} from 'react-redux';
import './attractionsTopTen.scss';
import AttractionCard from '../attractionCard/attractionCard';

export class AttractionsTopTen extends Component {

    renderAttractionCards() {

        /* TODO SHIKANG: Replace with top recommendations in the vicinity, using current center coords.
        Clicking should select the place and recenter it as well. */
        var placeInfo = [
        {
            icon: "https://investorplace.com/wp-content/uploads/2012/09/McDonalds185.jpg",
            name: "MacDonald's",
            upvotes: 50000,
            downvotes: 1566
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg",
            name: "KFC",
            upvotes: 64219,
            downvotes: 56
        },
        {
            icon: "https://media-cdn.tripadvisor.com/media/photo-s/0a/8b/d3/fe/salt-baked-chicken.jpg",
            name: "Lam's Salt Baked",
            upvotes: 77,
            downvotes: 4
        },
        {
            icon: "https://s3-media4.fl.yelpcdn.com/bphoto/D5_piQY_9NjDmFCu6Btb_Q/ls.jpg",
            name: "Al Azhar's Prata House",
            upvotes: 37456,
            downvotes: 141
        }]

        return (
            <div className="topten-list">
                <AttractionCard info={placeInfo[0]} />
                <div className="topten-hr"><hr/></div>
                <AttractionCard info={placeInfo[1]} />
                <div className="topten-hr"><hr/></div>
                <AttractionCard info={placeInfo[2]} />
                <div className="topten-hr"><hr/></div>
                <AttractionCard info={placeInfo[3]} />
            </div>
        );
    }

    render() {
         return (
            <div className="topten-section">

                <div className="topten-header">
                    <div className="topten-title"> TOP ATTRACTIONS IN</div>
                    {/*<div className="topten-title-country">{this.props.currentCountry.toUpperCase()}</div>*/}
                    <div className="topten-title-country">ROME</div>
                </div>

                {this.renderAttractionCards()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentCountry: state.countries.currCountry
});

export default connect(mapStateToProps, {})(AttractionsTopTen);