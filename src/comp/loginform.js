import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';
import { getSteamuserById } from '../Api';


function LoginModal ({ isOpen, toggleLoginModal }) {
    let renderlogin;
    if(isLoggedIn)
        renderlogin =(<Media heading className=""> hello {isLoggedIn} :) </Media>);

    else
        renderlogin =(<Button onClick={toggleLoginModal}><span className="fa fa-steam fa-lg"></span> log in with steam</Button>)

    return(
        <div>
            {renderlogin}
            <Modal isOpen={isOpen} toggle={toggleLoginModal}>
                <ModalHeader toggle={toggleLoginModal}><span className="fa fa-steam fa-lg"></span> steam login</ModalHeader>
                <ModalBody>
                    <p className="modaltext">log in to steam account and authenticate, then join an open lobby slot.</p>
                </ModalBody>
                <ModalFooter>
                    <Button className="steam-login-button" href="api/auth/openid"><span className="fa fa-steam fa-lg"></span> log in</Button>{' '}
                    <Button className="button-cancel-vote" onClick={toggleLoginModal}>cancel</Button>
                </ModalFooter>
            </Modal> 
        </div>
    );
}

export default LoginModal;
