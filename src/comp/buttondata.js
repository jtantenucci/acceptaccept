import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'reactstrap';

const shuffle = <FontAwesomeIcon icon={faRandom} />
const launch = <FontAwesomeIcon icon={faPlay} />

const ButtonData = () => {
    return(
    <ButtonGroup vertical size="md">
        <Button className="btn btn-shuffle">
            <span>
                <i>{shuffle} Shuffle Teams</i>
            </span>
        </Button>
        <Button className="btn btn-launch">
            <span>
                <i>{launch} Launch Server</i>
            </span>
        </Button>
    </ButtonGroup>
    )
}

export default ButtonData;