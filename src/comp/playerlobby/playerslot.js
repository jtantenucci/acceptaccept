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
    }
    render () {
        return (
            <PlayerCard 
                handleClick={this.handleClick}
              leave={this.props.leave}
                ready={this.setReady}
                user={this.props.user}
            className={this.props.className}
            isCaptain={this.props.isCaptain}
            isLeader={this.props.isLeader} // FIXME
            />
        )
    }
}
