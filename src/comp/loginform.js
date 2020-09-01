import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';


function LoginModal ({ id }) {
    const isLoggedIn = id = localStorage.getItem('steamid');
    let renderlogin;
    if(isLoggedIn)
        renderlogin =(<Media heading className=""> {id} </Media>);

    else
        renderlogin =(<Button onClick={toggle}><span className="fa fa-steam fa-lg"></span> log in with steam</Button>)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div>
            {renderlogin}
            <Modal isOpen={modal} toggle={toggle}>
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
