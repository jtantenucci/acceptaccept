import React from 'react';
import { CardImg } from 'reactstrap';

const RenderMapCardImage = ({ maps }) => {
    return(
            <React.Fragment>
                <CardImg top width="100%" size="lg" src={maps.image} alt={maps.name} />
            </React.Fragment>
        );
    }

export default RenderMapCardImage;