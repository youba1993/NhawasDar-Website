import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/actions/LoginAction';


function UserLogin() {
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
    fetch("/user_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "user": formDataIn }),
    }).then(res => {
      if (res.ok) {
        res.json()
          .then((res) => {
            localStorage.setItem("token", res.jwt)
            dispatch(userLogin(res))
            navigate("/")
          })
      } else {
        alert("Wrong Email or Password,Please Try Again ");
      }
    })
  }

  return (
    <div>
      <div className="bg-image p-5" id="home">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0 text-center">Renter Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formDataIn.email}
                        onChange={(e) => { handleChange(e) }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formDataIn.password}
                        onChange={(e) => { handleChange(e) }}
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default UserLogin;
