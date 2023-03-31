import React, { useState } from 'react';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    function handleClick() {
        setShowModal(true)
    }

    function handleClose() {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} rounded secondary>I agree</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            You agree to close
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Show Modal</Button>
            {showModal && modal}
        </div>

    );
}

export default ModalPage;