import React, {useState} from 'react';

function UserLogin() {

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
        fetch("/user_login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "user" : formDataIn }),
            }).then(res=>res.json())
              .then(result=> console.log(result))
    
    }

    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
            <h2> Login User </h2>
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

export default UserLogin;
