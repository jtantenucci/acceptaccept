import React from 'react'
import {getGameById, postGameByIdTeamA} from '../Api'
export class PlayerSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: null
        };
        this.gameid = this.props.gameid;
        this.team = this.props.team;
        this.slotNo = this.props.slotNo;
    }

    handleChange = (e) => {
        this.setState({
            id: e.target.value
        });
        getGameById(this.gameid).then(res => console.log(res)).catch(err => console.log(err));
    }

    handleClick = (e) => {
        const id = localStorage.getItem('steamid');
        if(this.state.id == null && id)
        {
            postGameByIdTeamA(id, {steamid: id}).then(res => console.log(res)).catch(err => console.log(err))
        }
    }

    // fixMe wasteful API calls

    render () {
        return (
            <td onClick={this.handleClick} className="user">
            {this.state.playerId}
            </td>
        )
    }
}
