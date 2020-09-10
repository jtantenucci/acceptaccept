import React from 'react';
import { Button, Media, ButtonGroup, ButtonToggle } from 'reactstrap';


function PlayerCard({user, ready, handleClick, leave, className}) {
    let buttons;
    if(user?.steamId)
        buttons =(
                <ButtonGroup>
                    <ButtonToggle className={className}
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

    var className = "col-6 player-card-slot " + className;
    return (
        <div className={className} onClick={handleClick}>
            <Media>
                {media}
                <Media body>
                    <Media heading className="display sm-0">
                        {user?.username}
                    </Media>
                    {buttons}
                </Media>
            </Media>
        </div>
    );
}

export default PlayerCard;
