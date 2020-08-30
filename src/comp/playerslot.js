import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
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
            <th onClick={this.handleClick} className="user">
            <Button color="secondary" onClick={this.leave}>leave</Button>
            <img src={this.props.img} alt="dead game"/> {this.props.steamUser}
            <Button color="primary" onClick={this.setReady} active={this.props.ready}>ready</Button>
            </th>
        )
    }
}
