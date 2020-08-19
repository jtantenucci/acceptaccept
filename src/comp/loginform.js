import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = (props) => {
    const {
        Login,
        login
    } = props;
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
            <Button color="primary" onClick={toggle}>accept!</Button>
            <Modal isOpen={modal} toggle={toggle} className={login}>
                <ModalHeader toggle={toggle}>Steam Login</ModalHeader>
                <ModalBody>
                    <p className="modaltext">Log in to steam account and authenticate, then join an open lobby slot.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Submit</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> 
        </div>
    );
}

export default LoginModal