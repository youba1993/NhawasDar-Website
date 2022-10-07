import React, { useState } from 'react';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';

function LandlordSignUp() {

    const [formSignUp, setFormSignUp] = useState({
        first_name: "",
        last_name: "",
        company_name: "",
        company_phone: "",
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

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/landlords", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "landlord": formSignUp }),
        }).then(res => res.json())
            .then(result => console.log(result))

    }

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />
            
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <h4 className="card-header">Landlord Signup</h4>
                    <div className="card-body">
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
                                <label>company_name : </label>
                                <input name="company_name" value={formSignUp.company_name} required onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="form-group">
                                <label>company_phone : </label>
                                <input name="company_phone" value={formSignUp.company_phone} required onChange={(e) => { handleChange(e) }} />
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

export default LandlordSignUp;
