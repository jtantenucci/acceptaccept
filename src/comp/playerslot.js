import React from 'react'
export class PlayerSlot extends React.Component {

    constructor(props) {
        super(props);
        this.gameid = this.props.gameid;
        this.team = this.props.team;
        this.handleClick = this.props.handleClick.bind(this);
        this.state = {
            steamUser : this.props.steamUser,
            img : this.props.img
        }
    }


    render () {
        return (
            <th onClick={this.handleClick} className="user">
              <img src={this.props.img} alt="/"/> {this.props.steamUser}
            </th>
        )
    }
}
