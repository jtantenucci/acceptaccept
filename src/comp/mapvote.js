import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, Form, Card, ModalBody, Alert } from 'reactstrap';
import { MAPS } from '../shared/maps';
import { postGameByIdVoteMap } from '../Api.js'
import RenderMapCardHead from './mapvoting/rendermapcardhead';
import RenderMapCardButtons from './mapvoting/rendermapcardbuttons';
import RenderMapCardImage from './mapvoting/rendermapcardimage';
import SuccessModal from './mapvoting/successmodal';
import AlertModal from './mapvoting/alertmodal';
import MapDisplay from './mapdisplay';


class MapVoteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalOpen: false,
            isActive: false,
            isModalOpen: false,
            isAlertMapVoteOpen: false,
            isAlertModalOpen: false,
            maps: MAPS,
            selected: null,
            votes: null
        };
        this.setActive = this.setActive.bind(this);
        this.setSuccessModal = this.setSuccessModal.bind(this);
        this.setAlertModal = this.setAlertModal.bind(this);
        this.setModal = this.setModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlertMapVote = this.setAlertMapVote.bind(this);
    }

    setModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    setAlertMapVote() {
        this.setState({
            isAlertMapVoteOpen: !this.state.isAlertMapVoteOpen
        });
    }

    setSuccessModal() {
        this.setState({
            isSuccessModalOpen: !this.state.isSuccessModalOpen
        });
    }

    setAlertModal() {
        this.setState({
            isAlertModalOpen: !this.state.isAlertModalOpen
        });
    }

    setActive() {
        this.setState({
            isActive: !this.state.isActive
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
            postGameByIdVoteMap(0, [id, {getName: this.state.selected}]).then(res => {
                let votes = res.data.mapVotes.map((x) => [x[0].getName, x[1].length]);
                votes.sort((a,b) => {return(
                    b[1] - a[1] );
                })
                this.setState({
                    isModalOpen: !this.state.isModalOpen,
                    isSuccessModalOpen: !this.state.isSuccessModalOpen,
                    votes: votes.slice(0,3) 
                })});
            event.preventDefault();
        }
    }



    render() {
        console.log(this.state.votes)
        const selectedKey = this.state.selected;
        const maps = this.state.maps.map((maps) => {
            return (
                <div key={maps.id} className="col-sm-6 col-lg-4 col-xl-3 map-vote">
                    <Card className="mapvote">
                        <RenderMapCardHead maps={maps} />   
                        <RenderMapCardImage maps={maps} />
                        <RenderMapCardButtons maps={maps}
                            active={this.setActive}                    
                            selected={selectedKey === maps.name} 
                            onChange={evt => this.onChange(maps.name, evt)} />
                    </Card>
                </div>
            )
        }); 

        return(
            <div>
                <Alert isOpen={true}>
                    <MapDisplay votes={this.state.votes} />
                    <Button block className="button-map-modal" onClick={this.setModal}>click to vote</Button>
                </Alert>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.setModal} size="xl">
                    <ModalHeader className="modal-vote-head" toggle={this.setModal}>
                        <i className="fa fa-map-o fa-md"></i> map select
                    </ModalHeader>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                            <div className="container">
                            <p className="modal-vote-text">select a map to vote from:</p>
                                <div className="row row-vote-cards">
                                    {maps}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" submit={this.state.selected} color="secondary"><span className="fa fa-paper-plane-o fa-lg"></span> vote</Button>{' '}
                                <AlertModal 
                                    isOpen={this.state.isAlertModalOpen}
                                    toggle={this.setAlertModal}
                                    onClick={this.setAlertModal}
                                />
                            <Button className="button-cancel-vote" onClick={this.setModal} >cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                <SuccessModal 
                    isOpen={this.state.isSuccessModalOpen}
                    toggle={this.setSuccessModal}
                    selected={this.state.selected}
                    onClick={this.setSuccessModal} >                            
                </SuccessModal>
            </div>
        );
    }
}

export default MapVoteModal;
