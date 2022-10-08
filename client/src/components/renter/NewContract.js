import Footer from "../home/Footer";
import NavBar from "../home/NavBar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'react-bootstrap/Toast';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { Zero } from "../redux/actions/HouseActions";

export default function NewContract() {
    const house = useSelector((state) => state.house)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function createContract(){
        console.log(house)
        
        navigate("/renter/contract")
        dispatch(Zero)
    }

    function noContract(){
        navigate(-1)
        dispatch(Zero)
    }

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />
            <br/>
            <Toast>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">new contract for House id : {house.id}</strong>
                    <Button type="button" variant="success" size="sm" onClick={()=>createContract()}> Confirm</Button>
                    <Button type="button" variant="dark" size="sm" onClick={()=>noContract()}> No</Button>
                </Toast.Header>
                <Toast.Body>Hello, Please confirme you request for renting this {house.house_type} located at {house.adress} for the price of {house.price} $/month.</Toast.Body>
            </Toast>
            <Footer />
        </div>
    )
}