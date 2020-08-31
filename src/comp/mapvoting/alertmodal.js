import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';

function AlertModal ({ isOpen, toggle, onClick }) {
    return(
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                alert :(
            </ModalHeader>
            <ModalBody>
                <Alert className="error-alert" color="danger">
                    please select a map before submitting
                </Alert>
            </ModalBody>
            <ModalFooter>
                <Button className="button-cancel-vote" onClick={onClick} >okay</Button>
            </ModalFooter>
        </Modal>
    );
}

export default AlertModal;