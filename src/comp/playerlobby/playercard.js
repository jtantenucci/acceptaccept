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
    let media;
    if(steamUser)
        media =(<Media left>
                    <Media object className="rounded" width="128px" height="128px" src={src} />
                </Media>);
    else
        media = (<Button block className="align-self-center player-ready-button" onClick={handleClick}>join slot</Button>
        );
        
    return (
        <div className="col-6 player-card-slot" onClick={handleClick}>
            <Media>
                {media}
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
