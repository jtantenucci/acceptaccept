import React, { useState } from 'react';
import { Card, CardImg, CardBody, Button, CardGroup, CardHeader } from 'reactstrap';

/* function SelectMap({map}) {
    return(
            <Card>
            <CardHeader>{map.name}</CardHeader>
                <CardImg top width="100%" size="lg" src={map.image} alt={map.name} />
                <CardBody className="text-center">
                    <Button outline className="button-vote btn-block" size="sm">
                        <i className="fa fa-plus-square-o fa-sm"></i> select
                    </Button>
                </CardBody>
            </Card>

        );
    }

    const FormData2 = (props) => {
        const map = props.maps.map((map) => {
            return (
                <CardGroup>
                    <Card key={map.id}>
                        <SelectMap map={map.id} />
                    </Card>
                </CardGroup>
            );
        });

    return (
        <CardGroup>
            {map}
        </CardGroup>
        );
         */
const FormData2 = () => {
    const [mapSelected, setMapSelected] = useState(null);

        return (
            <div className="container">
                <p className="modal-vote-text">select a map to vote from:</p>
                <CardGroup>
                    <Card>
                    <CardHeader>de_inferno</CardHeader>
                        <CardImg top width="100%" size="lg" src="./mapthumbnails/de_inferno.jpg" alt="inferno"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(1)} active={mapSelected === 1} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                    <CardHeader>de_vertigo</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_vertigo.jpg" alt="vertigo"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(2)} active={mapSelected === 2} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>de_mirage</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_mirage.jpg" alt="mirage"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(3)} active={mapSelected === 3} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>de_train</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_train.jpg" alt="train"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(4)} active={mapSelected === 4} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                    <CardHeader>de_dust2</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_dust2.jpg" alt="dust2"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(5)} active={mapSelected === 5} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                    <CardHeader>de_cbble</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_cbble.jpg" alt="cbble"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(6)} active={mapSelected === 6} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>de_cache</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_cache.jpg" alt="cache"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(7)} active={mapSelected === 7} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>de_nuke</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_nuke.jpg" alt="nuke"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(8)} active={mapSelected === 8} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                    <CardHeader>de_overpass</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_overpass.jpg" alt="overpass"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(9)} active={mapSelected === 9} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                    <CardHeader>de_season</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_season.jpg" alt="season"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(10)} active={mapSelected === 10} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>cs_office</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/cs_office.jpg" alt="office"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(11)} active={mapSelected === 11} 
                             className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card> 
                    <Card>
                    <CardHeader>de_toscan</CardHeader>
                        <CardImg top width="100%" src="./mapthumbnails/de_tuscan.jpg" alt="tuscan"/>
                        <CardBody className="text-center">
                            <Button outline onClick={() => setMapSelected(12)} active={mapSelected === 12} 
                              className="button-vote btn-block" size="sm">
                                <i className="fa fa-plus-square-o fa-sm"></i> select
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        );
    
}

export default FormData2;