import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HouseUpdate, Zero } from '../redux/actions/HouseActions';

function HouseEditDelete({ house }) {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    function handleDelete(event) {
        fetch(`/houses/${house.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res => {
            if (res.ok) {
                dispatch(Zero())
                navigate('/')
            } else {
                alert(" Something Wrong ,Please Try Again ");
            }
        })
    }

    const handleUpdate = () => {
        dispatch(HouseUpdate(house))
        navigate("/landlord/addListing")
    }

    return (
        <div>
            <Card.Body>
                <Button variant="danger" onClick={(e) => handleDelete(e)}><span class="material-symbols-outlined">delete_forever</span>Delete</Button>{' '}
                <Button variant="outline-warning" onClick={handleUpdate}><span class="material-symbols-outlined">update</span>Update</Button>
            </Card.Body>            
        </div>
    )
}
export default HouseEditDelete;