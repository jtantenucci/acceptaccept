import React, { Component } from 'react';
import { Table } from 'reactstrap';

const MatchLobby = () => {
    return (
        <div className="container">
            <Table hover>
                <thead>
                    <tr>
                        <th className="head">team 1</th>
                        <th className="head">team 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="user"></th>
                        <th className="user"></th>
                    </tr>
                    <tr>
                        <th className="user"></th>
                        <th className="user"></th>
                    </tr>
                    <tr>
                        <th className="user"></th>
                        <th className="user"></th>
                    </tr>
                    <tr>
                        <th className="user"></th>
                        <th className="user"></th>                    
                    </tr>
                    <tr>
                        <th className="user"></th>
                        <th className="user"></th>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default MatchLobby