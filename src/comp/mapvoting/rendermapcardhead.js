import React from 'react';
import { CardHeader } from 'reactstrap';

const RenderMapCardHead = ({ maps }) => {
    return(
            <CardHeader className="card-header">
                {maps.name}
            </CardHeader>
        );
    }

export default RenderMapCardHead;