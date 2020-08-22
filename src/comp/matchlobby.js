import React, { Component } from 'react';
import TableData from './tabledata';
import FormData from './formdata';
import ButtonData from './buttondata';

class MatchLobby extends Component {
    render () {
        return (
            <div className="container">
                <TableData />
                <br></br>
                <div className="row">
                    <div className="col">
                        <FormData />
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