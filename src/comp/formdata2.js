import React, { Component } from 'react';
import MapCard from './mapcard';
import { MAPS } from '../shared/maps';
import { CardGroup } from 'reactstrap';

class FormData2 extends Component {
    constructor(props) {
        super(props);
            this.state = {
            maps: MAPS,
        };
    }

    render () {
        return (
            <div className="container">
                <p className="modal-vote-text">select a map to vote from:</p>
                <CardGroup className="map-vote-group">
                    <MapCard maps={this.state.maps} />
                </CardGroup>
            </div>
        );
    }
}

export default FormData2;