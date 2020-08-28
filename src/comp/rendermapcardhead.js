import React from 'react';
import { CardHeader } from 'reactstrap';

const RenderMapCardHead = ({ maps }) => {
    return(
            <CardHeader>
                {maps.name}
            </CardHeader>
        );
    }

export default RenderMapCardHead;