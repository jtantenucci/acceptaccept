import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = (props) => {
    const {
        login
    } = props;
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div>
            <Button onClick={toggle}><span className="fa fa-steam fa-lg"></span> accept!</Button>
            <Modal isOpen={modal} toggle={toggle} className={login}>
                <ModalHeader toggle={toggle}><span className="fa fa-steam fa-lg"></span> steam login</ModalHeader>
                <ModalBody>
                    <p className="modaltext">log in to steam account and authenticate, then join an open lobby slot.</p>
                </ModalBody>
                <ModalFooter>
                    <Button className="steam-login-button" href="api/auth/openid"><span className="fa fa-steam fa-lg"></span> log in</Button>{' '}
                    <Button className="button-cancel-vote" onClick={toggle}>cancel</Button>
                </ModalFooter>
            </Modal> 
        </div>
    );
}

export default LoginModal;
