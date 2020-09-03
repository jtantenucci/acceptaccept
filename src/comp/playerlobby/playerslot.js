import React from 'react'
import PlayerCard from './playercard';
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
                handleClick={this.handleClick}
                leave={this.leave}
                ready={this.setReady}
                user={this.props.user}
            className={this.props.className}
            />
        )
    }
}
