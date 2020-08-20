import React, { Component } from 'react';

class PlayerSlot extends Component {
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

export default PlayerSlot;