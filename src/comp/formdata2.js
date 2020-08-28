import React, { Component } from 'react';
import { MAPS } from '../shared/maps';
import { Card, Form, Button, ModalBody, ModalFooter } from 'reactstrap';
import RenderMapCardHead from './rendermapcardhead';
import RenderMapCardButtons from './rendermapcardbuttons';
import RenderMapCardImage from './rendermapcardimage';

class FormData2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            maps: MAPS,
            active: false,
            selected: this.props.initialSelected 
        }
        this.onClick = this.onClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    onClick(active) {
        console.log(' active', active);
            if(this.state.selected !== active) {
            
            this.setState({ active: true })
        }
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
        const maps = this.state.maps.map((maps) => {
            return (
                <div key={maps.id} className="col-4 map-vote">
                    <Card className="mapvote">
                            <RenderMapCardHead maps={maps} />   
                            <RenderMapCardImage maps={maps} />
                            <RenderMapCardButtons maps={maps}                    
                                active={selectedKey === maps.name} 
                                onClick={evt => this.onClick(maps.name, evt)}
                                onChange={evt => this.onChange(maps.name, evt)} 
                            />
                    </Card>
                </div>
            )
        });        
        

        return (
            <Form onSubmit={this.handleSubmit}> 
                <ModalBody>
                    <div className="container">
                    <p className="modal-vote-text">select a map to vote from:</p>
                        <div className="row">
                            {maps}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                        <Button type="submit" submitted={this.state.selected} color="secondary"><span className="fa fa-paper-plane-o fa-lg"></span> vote</Button>{' '}
                        <Button color="danger" >cancel</Button>
                </ModalFooter>
            </Form>
        );
    }
}

export default FormData2;