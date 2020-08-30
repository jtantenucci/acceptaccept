import React from 'react'
import PlayerCard from './playercard';
import { Card, Row, Col } from 'reactstrap';
export class PlayerSlot extends React.Component {

    constructor(props) {
        super(props);
        this.gameid = this.props.gameid;
        this.team = this.props.team;
        this.handleClick = this.props.handleClick.bind(this);
        if (this.props.setReady)
            this.setReady = this.props.setReady.bind(this);
        this.isClient = this.props.isClient;
        if (this.props.leave)
            this.leave = this.props.leave.bind(this)
    }
    render () {
        return (
            <PlayerCard 
                leave={this.leave}
                onClick={this.setReady}
                src={this.props.img}
                active={this.props.ready}
                steamUser={this.props.steamUser}
            />
        )
    }
}
