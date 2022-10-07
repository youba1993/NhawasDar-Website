import { useEffect, useState } from "react";
import HouseCard from "../houses/HouseCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import HouseEditDelete from "./HouseEditDelete";
import NavBar from "../home/NavBar";
import Footer from "../home/Footer";
import { Link } from "react-router-dom";

function LandlordHouses() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        let controller = new AbortController();
        fetch("/landlord_index", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res => res.json())
            .then(result => setHouses(result))

        return () => controller?.abort();
    }, [])

    function listing() {
        if (houses.length === 0) {
            return  <Link to={"/landlord/addListing"} ><p>No listing for you, Click here to add Entree</p> </Link>

        } else {
            return <Row xs={2} md={3} className="g-3">
                {
                    houses.map((house, index) => {
                        return <HouseCard key={index} house={house} HouseEditDelete={HouseEditDelete} />
                    })
                }
            </Row>

        }
    }

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />
            <br/>
            <CardGroup>
                {listing()}
            </CardGroup>
            <Footer />
        </div>
    )

}
export default LandlordHouses;