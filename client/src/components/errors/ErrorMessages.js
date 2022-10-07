import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false);

    return (
        <Modal >
            <Modal.Header closeButton>
                <Modal.Title>Error Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>Oops, something went wrong. /n
                       <Link to={'/userLogin'}>Please Login</Link>
                       <Link to={'/userSingup'}>Or create an account </Link> 
            </Modal.Body>
        </Modal>
    )
}