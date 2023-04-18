import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
        <div className="bg-image p-5" id="home">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-transparent">
                                <h4 className="mb-0 text-center">Renter Signup</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="firstName" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="first_name"
                                                value={formSignUp.first_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastName" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="last_name"
                                                value={formSignUp.last_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formSignUp.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formSignUp.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordConfirmation" className="form-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordConfirmation"
                                            name="password_confirmation"
                                            value={formSignUp.password_confirmation}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-4">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserSignUp;
