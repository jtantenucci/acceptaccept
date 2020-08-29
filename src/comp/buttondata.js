import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'reactstrap';
import {postGameByIdVoteShuffle} from '../Api.js'

const shuffle = <FontAwesomeIcon icon={faRandom} />
const launch = <FontAwesomeIcon icon={faPlay} />


const ButtonData = () => {
    let voteForShuffle = (e) => {
        let id = localStorage.getItem('steamid'); // fix me not good :(
        postGameByIdVoteShuffle(0, {id: id}).then(
            console.log("VOTED SHUFFLE!!"));
    }
    return(
        <ButtonGroup vertical size="md">
            <Button className="btn btn-shuffle" onClick={voteForShuffle}>
                <span>
                    <i>{shuffle} shuffle teams</i>
                </span>
            </Button>
            <Button className="btn btn-launch">
                <span>
                    <i>{launch} launch server</i>
                </span>
            </Button>
        </ButtonGroup>
    )
}

export default ButtonData;
