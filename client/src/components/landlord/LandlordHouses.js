import { useEffect, useState } from "react";
import HouseCard from "../houses/HouseCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import HouseEditDelete from "./HouseEditDelete";

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
          .then(result => result? setHouses(result): null)
          return () => controller?.abort();
    }, [])


    return (
        <CardGroup>
            <Row xs={2} md={3} className="g-3">
                {
                    houses.map((house, index) => {
                        return <HouseCard key={index} house={house} HouseEditDelete={HouseEditDelete} />
                    })
                }
            </Row>
        </CardGroup>
    )

}
export default LandlordHouses;