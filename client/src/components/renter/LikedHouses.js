import { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import HouseCard from "../houses/HouseCard";
import HouseReviewLike from './HouseReviewLike'

export default function LikedHouses() {

    const [list, setList] = useState([])

    useEffect(() => {
        let controller = new AbortController();
        fetch(`/house_likes`, {
            method: 'GET',
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Berear ${localStorage.getItem("token")}`
            },
        }).then((resp) => {
            if (resp.ok) {
                resp.json()
                    .then((res) => {
                        if (res.length === 0)
                            setList([])
                        else
                            setList(res)
                    })
            } else return <alert>Something Wrong</alert>
        })

        return () => controller?.abort();
    }, [])

    return (
        <div>
            <div className="p-5 bg-image" id="home">
          
                <br />
                <CardGroup>
                    <Row xs={2} md={3} className="g-3">
                        {list.map((house, index) => {
                            return <HouseCard key={index} house={house.house} HouseReviewLike={HouseReviewLike} />
                        })
                        }
                    </Row>
                </CardGroup >
            </div>
    
        </div>
    )
}