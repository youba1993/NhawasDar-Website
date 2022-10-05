import { useState } from "react";

function CreateHouse() {

    const [listing, setlisting] = useState({
        adress: "",
        square_footage: 0,
        price: 0,
        house_type: "",
        num_beds: 0,
        num_baths: 0,
        air_cond: false,
        elevator: false,
        furnished: false
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
        console.log(listing)

        fetch("/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ "house": listing }),
        }).then(res => res.json())
            .then(result => console.log(result))

    }

    return (
        <>
            <div className="form-group col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <h4 className="card-header">Liste a new House</h4>
                    <div className="card-body">
                        <form className="form-group col-md-6 offset-md-3 mt-5" onSubmit={(e) => { handleSubmit(e) }}>


                            <div className="form-group col-md-6">
                                <label htmlFor="exampleFormControlFile1">Choose Pictures</label>
                                <input type="file" className="form-control-file" />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Adress : </label>
                                <input className="form-control" name="adress" value={listing.adress} required onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Square Footage : </label>
                                <input className="form-control" name="square_footage" value={listing.square_footage} required onChange={(e) => { handleChange(e) }} />
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label">Price : </label>
                                <input className="form-control" name="price" value={listing.price} required onChange={(e) => { handleChange(e) }} />
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
                                <input type="checkbox" className="form-check-input" name="air_cond" value={listing.air_cond} onChange={(e) => { handleChange(e) }} placeholder="password_confirmation" />
                                <label className="custom-control-label">Air conditioner  </label>

                                <input type="checkbox" className="form-check-input" name="elevator" value={listing.elevator} onChange={(e) => { handleChange(e) }} placeholder="password_confirmation" />
                                <label className="custom-control-label">Elevator  </label>

                                <input type="checkbox" className="form-check-input" name="furnished" value={listing.furnished} onChange={(e) => { handleChange(e) }} placeholder="password_confirmation" />
                                <label className="custom-control-label">Furnished  </label>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Add to listing
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateHouse;