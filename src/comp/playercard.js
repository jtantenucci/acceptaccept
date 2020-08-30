import React from 'react';
import { Button, Card, CardBody, CardGroup, CardHeader } from 'reactstrap';


function PlayerCard({steamUser, src, onClick, active}) {
    return (
        <CardGroup>
            <Card>
                <img width="100%" src={src} alt="dead game"/>
            </Card>
            <Card>
                <CardBody className="text-left">
                    <CardHeader>
                        {steamUser}
                    </CardHeader>
                    <Button color="primary" onClick={onClick} active={active}>ready</Button>    
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default PlayerCard;