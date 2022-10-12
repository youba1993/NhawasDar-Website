import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import { landlordLogin } from '../redux/actions/LoginAction';


function LandlordLogin() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formDataIn, setFormDataIn] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormDataIn({
      ...formDataIn,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/landlord_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "landlord": formDataIn }),
    }).then(res => {
      if (res.ok) {
        res.json()
          .then((res) => {
            localStorage.setItem("token", res.jwt)
            dispatch(landlordLogin(res))
            navigate("/")
          })
      } else {
        alert("Wrong Email or Password,Please Try Again ");
      }
    })

  }

  return (
    <div>
      <div className="p-5 bg-image" id="home">
        <NavBar />

        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <h4 className="card-header">Landlord Login</h4>
            <div className="card-body">
              <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="form-group row">
                  <label>Email</label>
                  <input name="email" value={formDataIn.email} required onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="form-group row">
                  <label>Password</label>
                  <input type="password" name="password" value={formDataIn.password} required onChange={(e) => { handleChange(e) }} placeholder="Password" />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Login
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

export default LandlordLogin;
