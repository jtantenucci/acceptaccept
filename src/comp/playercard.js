import React from 'react';
import { Button, Card, CardBody, Row, CardHeader, Col, Media } from 'reactstrap';


function PlayerCard({steamUser, src, onClick, active}) {
    return (
        <div className="col-6 player-card-slot">
            <Media>
                <Media left>
                    <Media object className="rounded" width="128px" height="128px" src={src} alt="join"/>
                </Media>
                <Media body>
                    <Media heading className="">
                        {steamUser}
                    </Media>
                    <Button className="player-ready-button" color="primary" onClick={onClick} active={active}>ready</Button>    
                </Media>
            </Media>
        </div>
    );
}

export default PlayerCard;