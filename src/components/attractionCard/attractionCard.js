import React, { Component } from 'react';
import './attractionCard.scss';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown
} from 'react-icons/fa';

export class AttractionCard extends Component {

    render() {
         return (
             <div className="aCard-section">
                <div className="aCard-top">
                    <img className="aCard-icon" src={this.props.info.icon} alt="" width={32} height={32}/>
                    <span className="aCard-name">{this.props.info.name}</span>
                </div>
                <div>
                    <span className="aCard-upvotes"> <FaRegArrowAltCircleUp/> {this.props.info.upvotes}</span>
                    <span className="aCard-downvotes"> <FaRegArrowAltCircleDown/> {this.props.info.downvotes}</span>
                </div>
            </div>
        )
    }
}

export default AttractionCard;