import React, { Component } from 'react';
import TableData from './tabledata';
import MapVoteModal from './mapvote';
import ButtonData from './buttondata';

class MatchLobby extends Component {
    render () {
        return (
            <div className="container">
                <TableData />
                <br></br>
                <div className="row">
                    <div className="col vote">
                        <MapVoteModal />
                    </div>
                    <div className="col shuffle">
                        <ButtonData />
                    </div>
                </div>
            </div>
        );
    } 
}   

export default MatchLobby;