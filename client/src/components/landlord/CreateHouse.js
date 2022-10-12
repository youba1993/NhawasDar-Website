import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../home/Footer";
import NavBar from "../home/NavBar";
import { Zero } from "../redux/actions/HouseActions";

function CreateHouse() {
    const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    let navigate = useNavigate();
    let house = useSelector((state) => state.house);
    const dispatch = useDispatch();

    if (house.id === 0) {
        house = false
    }

    const [listing, setlisting] = useState({
        adress: house ? house.adress : "",
        square_footage: house ? house.square_footage : 0,
        price: house ? house.price : 0,
        house_type: house ? house.house_type : "",
        num_beds: house ? house.num_beds : 0,
        num_baths: house ? house.num_baths : 0,
        air_cond: house ? house.air_cond : false,
        elevator: house ? house.elevator : false,
        furnished: house ? house.furnished : false
    });

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        setlisting({
            ...listing,
            [name]: value,
        });
  
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ "house": listing }),
        }).then(res => {
            if (res.ok) {
                navigate("/landlord/houses")
            } else {
                alert(" Something Wrong ,Please Try Again ");
            }
        })
        console.log(listing)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        handleChange(e);
        fetch(`/houses/${house.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ "house": listing }),
        }).then(res => {
            if (res.ok) {
                navigate("/landlord/houses")
            } else {
                alert(" Something Wrong ,Please Try Again ");
            }
        })
        dispatch(Zero())
    }

    return (
        <div className="p-5 bg-image" id="home" >
            <NavBar />

            <div className="form-group col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <h4 className="card-header">{house ? "Update house" : "Liste a new House"} </h4>
                    <div className="card-body">
                        <form className="form-group col-md-6 offset-md-3 mt-5" onSubmit={(e) => { house ? handleUpdate(e) : handleSubmit(e) }}>

                            {house ? "" :
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleFormControlFile1">Choose Pictures</label>
                                    <input type="file" className="form-control-file" />
                                </div>
                            }

                            <div className="form-group row">
                                <label className="col-form-label">Adress : </label>
                                <select className="form-control" name="adress" value={listing.adress} required onChange={(e) => { handleChange(e) }}>
                                    {states.map((state, index) => {
                                        return <option key={index}>{state}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Square Footage : </label>
                                <input className="form-control" name="square_footage" type="number" value={listing.square_footage} required onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Price : </label>
                                <input className="form-control" name="price" type={"number"} value={listing.price} required onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">House Type : </label>
                                <select className="form-control" name="house_type" value={listing.house_type} required onChange={(e) => { handleChange(e) }}>
                                    <option>Apartments</option>
                                    <option>Townhouses</option>
                                    <option>Condos</option>
                                    <option>Houses</option>
                                </select>
                            </div>

                            <div className="form-group row" >
                                <label className="col-form-label" >Number of beds : </label>
                                <select className="form-control" name="num_beds" value={listing.num_beds} required onChange={(e) => { handleChange(e) }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Number of bathrooms : </label>
                                <select className="form-control" name="num_baths" value={listing.num_baths} required onChange={(e) => { handleChange(e) }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div className="form-group row">
                                <input type="checkbox" className="form-check-input" name="air_cond" value={listing.air_cond} onChange={(e) => { handleChange(e) }} checked={listing.air_cond} />
                                <label className="custom-control-label">Air conditioner  </label>

                                <input type="checkbox" className="form-check-input" name="elevator" value={listing.elevator} onChange={(e) => { handleChange(e) }} checked={listing.elevator} />
                                <label className="custom-control-label">Elevator  </label>

                                <input type="checkbox" className="form-check-input" name="furnished" value={listing.furnished} onChange={(e) => { handleChange(e) }} checked={listing.furnished} />
                                <label className="custom-control-label">Furnished  </label>
                            </div>


                            <button type="submit" className="btn btn-primary">
                                {house ? "Update house" : "Add to listing"}
                            </button>


                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CreateHouse;