import React from 'react';
import { CardHeader } from 'reactstrap';

const RenderMapCardHead = ({ maps }) => {
    return(
            <React.Fragment>
                <CardHeader>{maps.name}</CardHeader>
            </React.Fragment>
        );
    }

export default RenderMapCardHead;