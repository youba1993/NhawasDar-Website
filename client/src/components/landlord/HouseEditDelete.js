import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CreateHouse from './CreateHouse';
function HouseEditDelete({ house }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function handleDelete(event) {
        fetch(`/houses/${house.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res => console.log(res));
    }

    const handleUpdate = () => {
        setShow(true)
    }

    function update(form){
        fetch(`/houses/${house.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({ "house": form }),
        }).then((res)=>res.json())
          .then((res)=>console.log(res))
          setShow(false)  
    }


    return (
        <>
            <Card.Body>
                <Button variant="danger" onClick={(e) => handleDelete(e)}>Delete</Button>{' '}
                <Button variant="outline-warning" onClick={handleUpdate}>Update</Button>
            </Card.Body>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <CreateHouse  house={house} update={update}/>
                </Modal.Body>             
            </Modal>
        </>
    )
}
export default HouseEditDelete;