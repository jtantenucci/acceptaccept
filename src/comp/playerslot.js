import React from 'react'
import axios from 'axios'
import api from 'api'
// FIXME: how do you do this right
export default class PlayerSlotA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: null
        };
        this.gameid = this.gameid.bind(gameid)
    }

    handleChange = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    handleClick = (e) => {
        const id = localStorage.getItem('steamid');
        if(this.state.id == null && id)
        {
            api.postGameByIdTeamA(id);
            this.setState({id: e});
        }
    }
    // fixMe wasteful API calls
    getId = () => {
        api.getGameById(0)
    }

    render () {
        // FIXME not 0
        return (
            <td onClick={this.handleClick} className="user">
                getGame(0).teamA[]
            </td>
        )
    }
}

export default class PlayerSlotA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: null
        };
    }

    handleChange = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    handleClick = (e) => {
        const id = localStorage.getItem('steamid');
        if(this.state.id == null && id)
        {
            api.postGameByIdA(id);
            this.setState({id: e});
        }
    }

    render () {
        return (
            <td onClick={this.handleClick} className="user">
                {this.handleChange}
            </td>
        )
    }
}
