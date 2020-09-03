import React from 'react';
import { Button, Media, ButtonGroup, ButtonToggle } from 'reactstrap';


function PlayerCard({user, ready, handleClick, leave}) {
    const isClient = user?.steamId == localStorage.getItem('steamid');
    let buttons;
    if(isClient)
        buttons =(<ButtonGroup>
                    <ButtonToggle className="player-ready-button"
                                  color="primary"
                                  onClick={ready}
                                  >
                      ready
                    </ButtonToggle>
                    <Button className="player-leave-button"
                            color="primary"
                            onClick={leave}>
                      leave
                    </Button>
                </ButtonGroup>);
    else
        buttons = null;
    let media;
    if(user?.steamId)
        media =(<Media left>
                <Media object className="rounded" width="128px" height="128px" src={user.avatar} />
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
        {user?.username}
                    </Media>
                    {buttons}
                </Media>
            </Media>
        </div>
    );
}

export default PlayerCard;
