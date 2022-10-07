import React, {useState} from 'react';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';

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

    const valid = formSignUp.password !== formSignUp.password_confirmation ? false : true
    

    function mismatched(){
        const ulError = document.createElement("ul")
        const liError = document.createElement("li")
        liError.style.color = "red"
        const textError = document.createTextNode("Password mismatched") 
        liError.appendChild(textError)
        ulError.appendChild(liError)
        document.getElementById("formU").appendChild(ulError)
    }

    function handleSubmit(event){
        event.preventDefault();

        if (valid){
            fetch("/users",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "user" : formSignUp }),
            }).then(res => {
            if (res.ok){
                    res.json()
                    .then(result => console.log(result))
            }else{
                alert("Oops, something went wrong, Try Again ");
            }
        })    
        }else{
            mismatched()
        }    
    }

    return (
        <div className="p-5 bg-image" id="home">
        <NavBar />
     
        <div className="col-md-6 offset-md-3 mt-5">
        <div className="card">
            <h4 className="card-header">Renter Signup</h4>
            <div className="card-body" id="formU">
                <form className="row row-cols-lg-auto g-3" onSubmit={(e) => { handleSubmit(e) }}>

                    <div className="form-group">
                        <label>first_name : </label>
                        <input name="first_name" value={formSignUp.first_name} required onChange={(e) => { handleChange(e) }} />
                    </div>

                    <div className="form-group">
                        <label>last_name : </label>
                        <input name="last_name" value={formSignUp.last_name} required onChange={(e) => { handleChange(e) }} />
                    </div>

                    <div className="form-group">
                        <label>Email : </label>
                        <input name="email" value={formSignUp.email} required onChange={(e) => { handleChange(e) }} />
                    </div>

                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" name="password" value={formSignUp.password} required onChange={(e) => { handleChange(e) }} placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label>password_confirmation : </label>
                        <input type="password" name="password_confirmation" value={formSignUp.password_confirmation} required onChange={(e) => { handleChange(e) }} placeholder="password_confirmation" />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </div>
    )
}

export default UserSignUp;
