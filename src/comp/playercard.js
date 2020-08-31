import React from 'react';
import { Button, Media, ButtonGroup, ButtonToggle } from 'reactstrap';


function PlayerCard({steamUser, src, onClick, active, handleClick, leave, id}) {
    const isClient = id == localStorage.getItem('steamid');
    let buttons;
    console.log("playercard iD: " + id);
    if(isClient)
        buttons =(<ButtonGroup>
                    <ButtonToggle className="player-ready-button" color="primary" onClick={onClick} active={active}>ready</ButtonToggle>
                    <Button className="player-leave-button" color="primary" onClick={leave}>leave</Button>
                </ButtonGroup>);
    else
        buttons = null;
    return (
        <div className="col-6 player-card-slot" onClick={handleClick}>
            <Media>
                <Media left>
                    <Media object className="rounded" width="128px" height="128px" src={src} alt="join"/>
                </Media>
                <Media body>
                    <Media heading className="">
                        {steamUser}
                    </Media>
                    {buttons}
                </Media>
            </Media>
        </div>
    );
}

export default PlayerCard;
