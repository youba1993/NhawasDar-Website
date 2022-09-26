import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LandlordSignUp() {

    const [formSignUp, setFormSignUp] = useState({  first_name: "",
                                                    last_name: "",
                                                    company_name: "",
                                                    company_phone: "",
                                                    email: "",
                                                    password:"",
                                                    password_confirmation: ""
                                                });

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormSignUp({
            ...formSignUp,
            [name]: value,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch("/landlords",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "landlord" : formSignUp }),
            }).then(res=>res.json())
              .then(result=> console.log(result))
    
    }

    return (
        <div style={{   display: 'block', 
                        width: 500, 
                        padding: 40 
                        }}>

        <Form onSubmit={(e) => {handleSubmit(e)}}>
        <Form.Group>

         <Form.Label>First name :</Form.Label>
         <Form.Control required type="text" placeholder="First name"
                        name="first_name" value={formSignUp.first_name} onChange={(e) => {handleChange(e)}}
                        />
        
        </Form.Group>

        <Form.Group >
        <Form.Label>Last name :</Form.Label>
        <Form.Control required type="text" placeholder="Last name"
                        name="last_name" value={formSignUp.last_name} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>

        <Form.Group >
        <Form.Label>Email :</Form.Label>
        <Form.Control required type="email" placeholder="example@email.com"
                        name="email" value={formSignUp.email} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>
                        
        <Form.Group >
        <Form.Label>Company Name :</Form.Label>
        <Form.Control required type="email" placeholder="Company Name"
                        name="company_name" value={formSignUp.company_name} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>
       
        <Form.Group >
        <Form.Label>Company Phone :</Form.Label>
        <Form.Control required type="email" placeholder="Company Phone"
                        name="company_phone" value={formSignUp.company_phone} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>
                        
        <Form.Group >
        <Form.Label>Password :</Form.Label>
        <Form.Control required type="password" placeholder="Password"
                        name="password" value={formSignUp.password} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>
        <Form.Group >
        <Form.Label>Confirme Password :</Form.Label>
        <Form.Control required type="password" placeholder="Confirme Password"
                        name="password_confirmation" value={formSignUp.password_confirmation} onChange={(e) => {handleChange(e)}}
                        />
        </Form.Group>
        <br/>
        <Button type="submit">Submit</Button>
        </Form>
        </div>
    )

}

export default LandlordSignUp;
