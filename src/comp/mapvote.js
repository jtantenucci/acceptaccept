import React, { useState } from 'react';
import FormData2 from './formdata2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MapSelectModal = (props) => {
    const {
        vote
    } = props;
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
//**need to write** once all players ready up, event occurs, where modal is called 

    return(
        <div>
            <Button color="primary" onClick={toggle}></Button>
            <Modal isOpen={modal} toggle={toggle} 
                size="xl" className={vote}>
                <ModalHeader toggle={toggle}><i className="fa fa-map-o fa-md"></i> map select</ModalHeader>
                <ModalBody>
                    <FormData2 />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}><span className="fa fa-paper-plane-o fa-lg"></span> vote</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> 
        </div>
    );
}

export default MapSelectModal;