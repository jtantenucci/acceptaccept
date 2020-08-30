import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, Form, Card, ModalBody, Alert } from 'reactstrap';
import { MAPS } from '../shared/maps';
import { postGameByIdVoteMap } from '../Api.js'
import RenderMapCardHead from './rendermapcardhead';
import RenderMapCardButtons from './rendermapcardbuttons';
import RenderMapCardImage from './rendermapcardimage';


class MapVoteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isAlertModalOpen: false,
            maps: MAPS,
            selected: null,
        };
        this.setAlertModal = this.setAlertModal.bind(this);
        this.setModal = this.setModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    setAlertModal() {
        this.setState({
            isAlertModalOpen: !this.state.isAlertModalOpen
        });
    }

    onChange(selected) {
        console.log ('%s selected', selected);
        this.setState({ selected });
    }

    handleSubmit(event) {
        if (this.state.selected < 12) {
            this.setState({
                isAlertModalOpen: !this.state.isAlertModalOpen
            });
                event.preventDefault();
        } else {
            console.log( this.state.selected + ' submitted');
            let id = localStorage.getItem('steamid');
            console.log("Id" + id);
            postGameByIdVoteMap(0, [id, {getName: this.state.selected}]).then(console.log("VOTED :)"));
                this.setState({
                    isModalOpen: !this.state.isModalOpen
                });
            event.preventDefault();
        }
    }

    render() {
        const selectedKey = this.state.selected;
        const maps = this.state.maps.map((maps) => {
            return (
                <div key={maps.id} className="col-4 map-vote">
                    <Card className="mapvote">
                        <RenderMapCardHead maps={maps} />   
                        <RenderMapCardImage maps={maps} />
                        <RenderMapCardButtons maps={maps}                    
                            active={selectedKey === maps.name} 
                            onChange={evt => this.onChange(maps.name, evt)} />
                    </Card>
                </div>
            )
        }); 

        return(
            <div>
                <Button className="button-vote" onClick={this.setModal}>map</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.setModal} size="xl">
                    <ModalHeader className="modal-vote-head" toggle={this.setModal}>
                        <i className="fa fa-map-o fa-md"></i> map select
                    </ModalHeader>
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
                            <Button type="submit" submit={this.state.selected} color="secondary"><span className="fa fa-paper-plane-o fa-lg"></span> vote</Button>{' '}
                                <Modal isOpen={this.state.isAlertModalOpen} toggle={this.setAlertModal}>
                                    <ModalHeader>
                                        alert :(
                                    </ModalHeader>
                                    <ModalBody>
                                        <Alert className="error-alert" color="danger">
                                            please select a map before submitting
                                        </Alert>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button className="button-cancel-vote" onClick={this.setAlertModal} >okay</Button>
                                    </ModalFooter>
                                </Modal>
                            <Button className="button-cancel-vote" onClick={this.setModal} >cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal> 
            </div>
        );
    }
}

export default MapVoteModal;
