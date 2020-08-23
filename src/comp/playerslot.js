import React from 'react'
import {getGameById, postGameByIdTeamA, postGameByIdTeamB} from '../Api'
import {axios} from 'axios'
export class PlayerSlot extends React.Component {

    constructor(props) {
        super(props);
        this.gameid = this.props.gameid;
        this.team = this.props.team;
        this.slotNo = Number(this.props.slotNo);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            steamUser : this.props.steamUser,
            img : this.props.img
        }
    }

    handleClick = (e) => {
        const steamid = localStorage.getItem('steamId');
        console.log(localStorage.getItem("steamId"));
        if(steamid)
        {
            if(this.team === "teamA")
                {
                    postGameByIdTeamA(this.gameid, [this.slotNo, Number(steamid)])
                        .then(game => {
                            this.setState({steamUser: game.data.teamA?.[this.slotNo]?.username,
                                           img: game.data.teamA?.[this.slotNo]?.avatarFull
                                     });

                            })
                        .catch(err => console.log(err))
                }
            else
                {
                    postGameByIdTeamB(this.gameid, [this.slotNo, Number(steamid)])
                        .then(game => {
                            console.log(game.data);
                            this.setState({steamUser: game.data.teamB?.[this.slotNo]?.username,
                                           img: game.data.teamB?.[this.slotNo]?.avatarFull});
                            })
                        .catch(err => console.log(err))
                }
        }
    }

    // fixMe wasteful API calls

    render () {
        return (
            <th onClick={this.handleClick} className="user">
              <img src={this.state.img}/> {this.state.steamUser}
            </th>
        )
    }
}
