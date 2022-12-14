import HouseCard from "./HouseCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import HouseReviewLike from "../renter/HouseReviewLike";
function HousesIndex({ result }) {

    return (
        <CardGroup>
            <Row xs={2} md={3} className="g-3">
                {
                    result.map((house, index) => {
                        return <HouseCard key={index} house={house} HouseReviewLike={HouseReviewLike} />
                    })
                }
            </Row>
        </CardGroup>
    )
}

export default HousesIndex;