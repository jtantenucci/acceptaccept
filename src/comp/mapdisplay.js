import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


function MapDisplay ({votes}) {
    const mapdisplay = votes?.map((v) => {
        return (
            <ul className="list-of-maps" key={v[1]}>
                <li>{v[0]} <Badge className="badge-vote" pill>{v[1]}</Badge></li>
            </ul>
        )    
    });
            
    return (
        <ListGroup>
            <ListGroupItem className="list-of-maps">{mapdisplay}</ListGroupItem>
        </ListGroup>
    );
    
}


export default MapDisplay;