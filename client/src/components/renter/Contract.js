import Footer from "../home/Footer";
import NavBar from "../home/NavBar";
import Toast from 'react-bootstrap/Toast';
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
export default function Contract() {
    const [contracts, setContracts] = useState([])

    function deleteContract(e) {
        e.preventDefault()

        fetch(`/contracts/${e.target.value}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Berear ${localStorage.getItem("token")}`
            },
        }).then(res => {
            if (res.ok) {
                res.json()
                    .then((res) => {
                        const newContracts = contracts.filter((contract) => contract.id !== res)
                        setContracts(newContracts)                        
                    })
            } else {
                alert("Something Wrong, Please Try Again");
            }
        })
    }

    useEffect(() => {
        fetch("/contracts", {
            method: 'GET',
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Berear ${localStorage.getItem("token")}`
            },
        }).then(res => {
            if (res.ok) {
                res.json()
                    .then((res) => {
                        console.log(res)
                        setContracts(res)
                    })
            } else {
                alert("Something Wrong, Please Try Again");
            }
        })
    }, [])

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />
            <br />
            {contracts.map((contract) => {
                return <Toast key={contract.id}>
                    <Toast.Header closeButton={false}>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Contract id : {contract.id}</strong>
                        <Button type="button" variant="danger" size="sm" value={contract.id} onClick={(e) => deleteContract(e)}> Delete </Button>
                    </Toast.Header>
                    <Toast.Body>you submited this contract requeste the {contract.created_at.split('T')[0]} for the amount of {contract.rent_amount} $/month.</Toast.Body>
                </Toast>
            })}

            <br />
            <Footer />
        </div>
    )
}