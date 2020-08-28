import React from 'react';
import { Label, CardFooter } from 'reactstrap';
import { RadioButton } from 'react-radio-buttons';
const RenderMapCardButtons = ({ maps, selected, onChange }) => {
    return(
            <React.Fragment>
                <CardFooter>
                    <Label key={maps.key} htmlFor={maps.key} className="vote-radio" />
                            <RadioButton className="button-vote btn-block"
                            margin="0"
                            iconSize="0"
                            iconInnerSize="0"
                            size="sm"
                            id={maps.key}  
                            checked={selected} 
                            value={maps.key} 
                            onChange={onChange}
                            pointColor="white"
                            >
                            {maps.label}
                        </RadioButton>
                </CardFooter>
            </React.Fragment>
        );
    }

export default RenderMapCardButtons;