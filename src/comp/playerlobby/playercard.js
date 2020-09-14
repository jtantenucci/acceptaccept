import React from 'react';
import { Button, Media, ButtonGroup, ButtonToggle } from 'reactstrap';


function PlayerCard({user, ready, handleClick, leave, className, isCaptain, isLeader}) {
    const isClient = user?.steamId == localStorage.getItem('steamid');
    console.log("captain" + isCaptain)
    let buttons;
    if(isClient)
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
    else if (isLeader && user)
        buttons = (<ButtonGroup>
                   <Button className="player-leave-button"
                           color="primary"
                           onclick={leave}
                   >
                   kick
                   </Button>
                  </ButtonGroup>);
    else
        buttons = null;
    let media;
    if(user?.steamId)
        media =(<Media left>
                <img className="rounded" width="128px" height="128px" src={user.avatar} />
                {isCaptain ? <img className="hat" width="64x" height="64px" src="yankee.png"/> : null}
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
