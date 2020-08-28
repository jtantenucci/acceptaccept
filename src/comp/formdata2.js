import React, { Component } from 'react';
import { MAPS } from '../shared/maps';
import { Card, Form, Button } from 'reactstrap';
import RenderMapCardHead from './rendermapcardhead';
import RenderMapCardButtons from './rendermapcardbuttons';
import RenderMapCardImage from './rendermapcardimage';

class FormData2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            maps: MAPS,
            selected: this.props.initialSelected 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    onChange(selected) {
        console.log ('%s selected', selected);
        this.setState({ selected });
    }

    handleSubmit(event) {
        console.log( this.state.selected + ' submitted');
        event.preventDefault();
    }
    
    render () {
        const selectedKey = this.state.selected;
        const maps = this.props.maps.map((maps) => {
            return (
                <div key={maps.id} className="col-4 map-vote">
                    <Card className="mapvote">
                            <RenderMapCardHead maps={maps} />   
                            <RenderMapCardImage maps={maps} />
                            <RenderMapCardButtons
                                maps={maps}                    
                                selected={selectedKey === maps.name} 
                                onChange={evt => this.onChange(maps.name, evt)} 
                            />
                    </Card>
                </div>
            )
        });        
        

        return (
            <Form onSubmit={this.handleSubmit}> 
                <div className="container">
                    <div className="row map-display">
                        {maps}
                        <Button type="submit" submitted={this.state.selected} color="secondary"><span className="fa fa-paper-plane-o fa-lg"></span> vote</Button>{' '}
                    </div>
                </div>
            </Form>
        );
    }
}

export default FormData2;