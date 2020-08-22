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
        this.slotNo = Number(this.props.slotNo);
    }

    handleChange = (e) => {
        this.setState({
            id: e.target.value
        });
        let game = getGameById(this.gameid).then(res => console.log(res)).catch(err => console.log(err));
        this.setState({
            playerId: game[this.team][this.slotNo].steamId
        });

    }

    handleClick = (e) => {
        const steamid = localStorage.getItem('steamid');
        if(this.state.id == null && steamid)
        {
            postGameByIdTeamA(this.gameid, [this.slotNo, {steamId:Number(steamid)}])
                .then(game => {
                    console.log(this.team);
                    console.log(game.data);
                    let team = this.team;
                    let no = this.slotNo.toString;
                    let newid = game.data[this.team][this.slotNo].steamId;

                    this.setState({playerId: newid}) })
                .catch(err => console.log(err))
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
