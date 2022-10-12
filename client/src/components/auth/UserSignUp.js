import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import { userLogin } from '../redux/actions/LoginAction';

function UserSignUp() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [formSignUp, setFormSignUp] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormSignUp({
            ...formSignUp,
            [name]: value,
        });
    }

    const valid = formSignUp.password !== formSignUp.password_confirmation ? false : true


    function mismatched() {
        const ulError = document.createElement("ul")
        const liError = document.createElement("li")
        liError.style.color = "red"
        const textError = document.createTextNode("Password mismatched")
        liError.appendChild(textError)
        ulError.appendChild(liError)
        document.getElementById("formU").appendChild(ulError)
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (valid) {
            fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "user": formSignUp }),
            }).then(res => {
                if (res.ok) {
                    res.json()
                        .then((res) => {
                            localStorage.setItem("token", res.jwt)
                            dispatch(userLogin(res))
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
                        <h4 className="card-header">Renter Signup</h4>
                        <div className="card-body" id="formU">
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
                                    <label>Email : </label>
                                    <input name="email" type={'email'} value={formSignUp.email} required onChange={(e) => { handleChange(e) }} />
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

export default UserSignUp;
