import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
        <div className="bg-image p-5" id="home">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Landlord Signup</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="first_name" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={formSignUp.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="last_name" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={formSignUp.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="company_name" className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="company_name"
                  name="company_name"
                  value={formSignUp.company_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="company_phone" className="form-label">Company Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="company_phone"
                  name="company_phone"
                  value={formSignUp.company_phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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
                <label htmlFor="password" className="form-label">Password</label>
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
                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formSignUp.password_confirmation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Signup
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

export default LandlordSignUp;
