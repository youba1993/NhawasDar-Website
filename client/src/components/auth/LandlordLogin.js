import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { landlordLogin } from '../redux/actions/LoginAction';

function LandlordLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/landlord_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ landlord: formData }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.jwt);
        dispatch(landlordLogin(data));
        navigate('/');
      } else {
        alert('Wrong Email or Password, Please Try Again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong, Please Try Again.');
    }
  };

  return (
    <div className="bg-image p-5" id="home">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent">
                <h4 className="mb-0 text-center">Landlord Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <small>
                      Don't have an account?{" "}
                      <a href="/landlordSignup" className="text-primary">
                        Sign Up
                      </a>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandlordLogin;
