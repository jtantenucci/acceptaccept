import React from 'react'
import {getGameById, postGameByIdTeamA, postGameByIdTeamB} from '../Api'
import {axios} from 'axios'
export class PlayerSlot extends React.Component {

    constructor(props) {
        super(props);
        this.steamUser = this.props.steamUser;
        this.gameid = this.props.gameid;
        this.team = this.props.team;
        this.slotNo = Number(this.props.slotNo);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        const steamid = localStorage.getItem('steamId');
        console.log(localStorage.getItem("steamId"));
        if(steamid)
        {
            if(this.team === "teamA")
                {
                    console.log("I was clicked");
                    postGameByIdTeamA(this.gameid, [this.slotNo, {steamId:Number(steamid)}])
                        .then(game => {
                            console.log(game.data);
                            })
                        .catch(err => console.log(err))
                }
            else
                {
                    console.log("teamB!");
                    postGameByIdTeamB(this.gameid, [this.slotNo, {steamId:Number(steamid)}])
                        .then(game => {
                            console.log(game.data);
                            })
                        .catch(err => console.log(err))
                }
        }
    }

    // fixMe wasteful API calls

    render () {
        return (
            <th onClick={this.handleClick} className="user">
            {this.props.steamUser}
            </th>
        )
    }
}
