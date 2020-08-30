import React, { Component } from 'react';
import TableData from './tabledata';
import MapVoteModal from './mapvote';
import ButtonData from './buttondata';
import AcceptJumbotron from './jumbotron';

class MatchLobby extends Component {
    render () {
        return (
            <div>
                <AcceptJumbotron />
                <div className="container">
                    <TableData />
                    <br></br>
                    <div className="row row-buttons">
                        <div className="col vote">
                            <MapVoteModal />
                        </div>
                        <div className="col shuffle">
                            <ButtonData />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}   

export default MatchLobby;