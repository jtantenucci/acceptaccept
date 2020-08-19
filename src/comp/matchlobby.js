import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Table, Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

const shuffle = <FontAwesomeIcon icon={faRandom} />
const launch = <FontAwesomeIcon icon={faPlay} />

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
                <br></br>
            </Table>
            <div className="row">
                <div className="col">
                    <Form>
                        <FormGroup>
                            <Label for="mapSelect">map select</Label>
                                <Input type="select" name="select" id="mapSelect">
                                    <option>de_inferno</option>
                                    <option>de_vertigo</option>
                                    <option>de_mirage</option>
                                    <option>de_dust2</option>
                                    <option>de_dust</option>
                                    <option>de_train</option>
                                    <option>de_cache</option>
                                    <option>de_nuke</option>
                                    <option>de_overpass</option>
                                    <option>de_toscan</option>
                                    <option>de_cbble</option>
                                    <option>de_season</option>
                                    <option>arghhh</option>
                                    <option>blahhh</option>
                                </Input>
                        </FormGroup>
                    </Form> 
                </div>
                <div className="col shuffle">
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
                </div>
            </div>
        </div>
    );
}

export default MatchLobby