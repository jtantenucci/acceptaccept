import React, { useState } from 'react';
import FormData2 from './formdata2';
import { Button, Modal, ModalHeader } from 'reactstrap';
import { MAPS } from '../shared/maps';

const MapVoteModal = (props) => {
    const { vote } = props;
    const selectedRadio = 'de_inferno';
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
//**need to write** once all players ready up, event occurs, where modal is called 

    return(
        <div>
            <Button color="primary" onClick={toggle}>map</Button>
            <Modal isOpen={modal} toggle={toggle} 
                size="xl" className={vote}>
                <ModalHeader className="modal-vote-head" toggle={toggle}>
                    <i className="fa fa-map-o fa-md"></i> map select
                </ModalHeader>
                    <FormData2 
                        maps={MAPS} 
                        initialSelected={selectedRadio} 
                        toggle={toggle}
                    />
            </Modal> 
        </div>
    );
}

export default MapVoteModal;