import React, { useState } from 'react';
import { Card, CardImg, CardBody, Button, CardHeader } from 'reactstrap';

function RenderMapCard ({maps}) {
    const [mapSelected, setMapSelected] = useState(null);
    return(
            <Card>
                <CardHeader>{maps.name}</CardHeader>
                <CardImg top width="100%" size="lg" src={maps.image} alt={maps.name} />
                <CardBody className="text-center">
                    <Button outline onClick={() => setMapSelected(1)} active={mapSelected === 1}
                        className="button-vote btn-block" size="sm">
                        <i className="fa fa-plus-square-o fa-sm"></i> select
                    </Button>
                </CardBody>
            </Card>
        );
    }

    const MapCard = (props) => {
        const maps = props.maps.map((maps) => {
            return (
                <div key={maps.id} className="col-4 map-vote">
                    <RenderMapCard maps={maps} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {maps}
                </div>
            </div>
        )
    }

export default MapCard;