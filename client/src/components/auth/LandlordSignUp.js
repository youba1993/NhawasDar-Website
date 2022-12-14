import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import { landlordLogin } from '../redux/actions/LoginAction';

function LandlordSignUp() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [formSignUp, setFormSignUp] = useState({
        first_name: "",
        last_name: "",
        company_name: "",
        company_phone: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const valid = formSignUp.password !== formSignUp.password_confirmation ? false : true


    function mismatched() {
        const ulError = document.createElement("ul")
        const liError = document.createElement("li")
        liError.style.color = "red"
        const textError = document.createTextNode("Password mismatched")
        liError.appendChild(textError)
        ulError.appendChild(liError)
        document.getElementById("form").appendChild(ulError)
    }


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormSignUp({
            ...formSignUp,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (valid) {
            fetch("/landlords", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "landlord": formSignUp }),
            }).then(res => {
                if (res.ok) {
                    res.json()
                        .then((res) => {
                            localStorage.setItem("token", res.jwt)
                            dispatch(landlordLogin(res))
                            navigate("/")
                        })
                } else {
                    alert("Oops, something went wrong, Try Again ");
                }
            })
        } else {
            mismatched()
        }
    }

    return (
        <div>
            <div className="p-5 bg-image" id="home">
                <NavBar />

                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <h4 className="card-header">Landlord Signup</h4>
                        <div className="card-body" id="form">
                            <form className="row row-cols-lg-auto g-3" onSubmit={(e) => { handleSubmit(e) }}>

                                <div className="form-group row">
                                    <label>first_name : </label>
                                    <input name="first_name" value={formSignUp.first_name} required onChange={(e) => { handleChange(e) }} />
                                </div>

                                <div className="form-group row">
                                    <label>last_name : </label>
                                    <input name="last_name" value={formSignUp.last_name} required onChange={(e) => { handleChange(e) }} />
                                </div>

                                <div className="form-group row">
                                    <label>company_name : </label>
                                    <input name="company_name" value={formSignUp.company_name} required onChange={(e) => { handleChange(e) }} />
                                </div>

                                <div className="form-group row">
                                    <label>company_phone : </label>
                                    <input name="company_phone" type={'tel'} value={formSignUp.company_phone} required onChange={(e) => { handleChange(e) }} />
                                </div>

                                <div className="form-group row">
                                    <label>Email : </label>
                                    <input name="email" type='email' value={formSignUp.email} required onChange={(e) => { handleChange(e) }} />
                                </div>

                                <div className="form-group row">
                                    <label>Password : </label>
                                    <input type="password" name="password" value={formSignUp.password} required onChange={(e) => { handleChange(e) }} placeholder="Password" />
                                </div>

                                <div className="form-group row">
                                    <label>password_confirmation : </label>
                                    <input type="password" name="password_confirmation" value={formSignUp.password_confirmation} required onChange={(e) => { handleChange(e) }} placeholder="password_confirmation" />

                                </div>

                                <div>
                                    <button type="submit" className="btn btn-primary">
                                        Signup
                                    </button>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default LandlordSignUp;
