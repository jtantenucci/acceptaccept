import React from 'react';
import { Label, CardFooter, Input, Button, InputGroupAddon } from 'reactstrap';
const RenderMapCardButtons = ({ maps, selected, onChange }) => {
    return(
            <React.Fragment>
                <CardFooter>
                    <Label key={maps.key} htmlFor={maps.key} className="vote-radio" />
                        <Button outline="true"
                            size="sm"
                            className="button-vote btn-block"
                            id={maps.key}  
                            checked={selected}
                            active={selected} 
                            value={maps.key} 
                            onClick={onChange}
                            >
                            {maps.label}
                    </Button>        
                </CardFooter>
            </React.Fragment>
        );
    }

export default RenderMapCardButtons;