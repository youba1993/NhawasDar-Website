import React, { useState } from 'react';
import NavBar from '../home/NavBar';


function UserLogin() {

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
    fetch("/user_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "user": formDataIn }),
    }).then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.jwt))
  }

  return (
    <div className="p-5 bg-image" id="home">
      <NavBar />
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="card">
        <h4 className="card-header">Renter Login</h4>
        <div className="card-body">
          <form onSubmit={(e) => { handleSubmit(e) }}>
            <div className="form-group">
              <label>Email</label>
              <input name="email" value={formDataIn.email} required onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={formDataIn.password} required onChange={(e) => { handleChange(e) }} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )

}

export default UserLogin;
