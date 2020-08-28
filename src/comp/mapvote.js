import React, { useState } from 'react';
import FormData2 from './formdata2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MAPS } from '../shared/maps';

const MapVoteModal = (props) => {
    const {
        vote
    } = props;
    
    const selectedRadio = 'de_inferno';
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
//**need to write** once all players ready up, event occurs, where modal is called 

    return(
        <div>
            <Button color="primary" onClick={toggle}>map</Button>
            <Modal isOpen={modal} toggle={toggle} 
                size="xl" className={vote}>
                <ModalHeader className="modal-vote-head" toggle={toggle}><i className="fa fa-map-o fa-md"></i> map select</ModalHeader>
                    <ModalBody>
                        <FormData2 maps={MAPS} initialSelected={selectedRadio}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>cancel</Button>
                    </ModalFooter>
            </Modal> 
        </div>
    );
}

export default MapVoteModal;