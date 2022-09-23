import React, {useState} from 'react';

function LandlordLogin() {

    const [formDataIn, setFormDataIn] = useState({  email: "",
                                                    password:"" 
                                                });

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormDataIn({
            ...formDataIn,
            [name]: value,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch("/landlord_login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "landlord" : formDataIn }),
            }).then(res=>res.json())
              .then(result=> console.log(result))
    
    }

    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
            <h2> Login Landlord </h2>
            <label >  email:  </label>
            <br/>
            <input type="text" name="email" value={formDataIn.email} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <label >  password:  </label>
            <br/>
            <input type="password" name="password" value={formDataIn.password} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )

}

export default LandlordLogin;
