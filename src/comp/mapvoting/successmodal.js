import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';

function SuccessModal ({ isOpen, toggle, onClick, selected }) {
    return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    success :)
                </ModalHeader>
                <ModalBody>
                    <Alert className="light-alert" color="light">
                        vote for {selected} submitted!
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    <Button className="button-cancel-vote" onClick={onClick} >okay</Button>
                </ModalFooter>
            </Modal>
    );
}

export default SuccessModal;