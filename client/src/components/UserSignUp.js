import React, {useState} from 'react';

function UserSignUp() {

    const [formSignUp, setFormSignUp] = useState({  first_name: "",
                                                    last_name: "",
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
        fetch("/users",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "user" : formSignUp }),
            }).then(res=>res.json())
              .then(result=> console.log(result))
    
    }

    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
            <h2> Signup User </h2>
            <label >  *first name:  </label>
            <br/>
            <input type="text" name="first_name" value={formSignUp.first_name} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <label >  *last name:  </label>
            <br/>
            <input type="text" name="last_name" value={formSignUp.last_name} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <label >  *email:  </label>
            <br/>
            <input type="text" name="email" value={formSignUp.email} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <label >  *password:  </label>
            <br/>
            <input type="password" name="password" value={formSignUp.password} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <label >  *password confirmation:  </label>
            <br/>
            <input type="password" name="password_confirmation" value={formSignUp.password_confirmation} required onChange={(e) => {handleChange(e)}} />
            <br/>
            <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )

}

export default UserSignUp;
