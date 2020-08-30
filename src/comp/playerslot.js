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
        this.state = {
            steamUser : this.props.steamUser,
            img : this.props.img,
            ready : this.props.ready
        }
    }
    render () {
        return (
            <th onClick={this.handleClick} className="user">
                <PlayerCard 
                    onClick={this.setReady}
                    src={this.props.img}
                    active={this.props.ready}
                    steamUser={this.props.steamUser}
                />
            </th>
        )
    }
}
