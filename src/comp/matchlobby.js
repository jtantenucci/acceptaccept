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
                    <div className="row">
                        
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="head">team 1</h2>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="head">team 2</h2>
                        </div>
                    </div>
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