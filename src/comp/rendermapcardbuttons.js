import React from 'react';
import { Label, Button, CardBody } from 'reactstrap';
const RenderMapCardButtons = ({ maps, selected, onChange }) => {
    return(
            <React.Fragment>
                <CardBody className="card-body">
                    <Label key={maps.key} htmlFor={maps.key} className="vote-radio" />
                        <Button
                            size="sm"
                            className="button-vote btn-block"
                            id={maps.key}  
                            checked={selected}
                            active={selected} 
                            value={maps.key} 
                            onClick={onChange}
                            >
                            <i className="fa fa-plus-square-o fa-sm"></i> {maps.label}
                        </Button>       
                </CardBody>
            </React.Fragment>
        );
    }

export default RenderMapCardButtons;