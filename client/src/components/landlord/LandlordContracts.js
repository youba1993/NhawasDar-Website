import { useEffect, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
export default function LandlordContracts() {
    const [contracts, setContracts] = useState([])
    let navigate = useNavigate();
    
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

    function ValidateContract(e){
        e.preventDefault()

        fetch(`/contracts/${e.target.value}`,{
            method: 'PUT',
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Berear ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ "validateContract": true})
    }).then(res => {
        if (res.ok) {
            navigate("/")
        } else {
            alert(" Something Wrong ,Please Try Again ");
        }
    })

    }

useEffect(() => {
    fetch("/landlord/contracts", {
        method: 'GET',
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Berear ${localStorage.getItem("token")}`
        },
    }).then(res => {
        if (res.ok) {
            res.json()
                .then((res) => {
                    setContracts(res)
                })
        } else {
            alert("Something Wrong, Please Try Again");
        }
    })
}, [])

return (
    <>
        <div>
            <div className="p-5 bg-image" id="home">
                

                <br />
                {contracts.map((contract) => {
                    return <Toast key={contract.id}>
                        <Toast.Header closeButton={false}>
                            <strong className="me-auto">Contract id : {contract.id}</strong>
                            <Button type="button" variant="danger" size="sm" value={contract.id} onClick={(e) => deleteContract(e)}><span className="material-symbols-outlined">delete_forever</span> Delete </Button>
                        </Toast.Header>
                        <Toast.Body>
                            <h6>contract requeste created {contract.created_at.split('T')[0]} for the amount of {contract.rent_amount} $/month.</h6>
                            <h5>Status : {contract.validateContract ? `Approval in date ${contract.updated_at.split('T')[0]}` : <Button type="button" variant="danger" size="sm" value={contract.id} onClick={(e) => ValidateContract(e)}> Validate </Button>}</h5>
                        </Toast.Body>
                    </Toast>
                })}


            </div>
            
        </div>
    </>
)
}