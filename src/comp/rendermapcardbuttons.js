import React from 'react';
import { Label, Input } from 'reactstrap';

const RenderMapCardButtons = ({ maps, selected, onChange }) => {
    return(
            <React.Fragment>
                <Label className="radio-inline" key={maps.key} htmlFor={maps.key}>
                    <Input id={maps.key} type="radio" checked={selected} value={maps.key} onChange={onChange} />
                    {maps.label}
                </Label>
            </React.Fragment>
        );
    }

export default RenderMapCardButtons;