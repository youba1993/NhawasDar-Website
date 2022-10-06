import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function HouseCard({house, HouseEditDelete, HouseReviewLike}){ 
  

    return (
      <div >
      <Card border="info" style={{ width: '18rem'}} >
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>{house.house_type}</Card.Title>
      <Card.Text>
        Amazing {house.house_type} of {house.square_footage} sq with {house.num_beds} bedroom(s) and {house.num_baths} bathroom(s) . 
        {house.furnished ? "Furnished": "not Furnished"}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Price : {house.price} $/month</ListGroup.Item>
      <ListGroup.Item>Air conditioner : {house.air_cond? "yes":"no"}</ListGroup.Item>
      <ListGroup.Item>Elevator : {house.elevator? "yes":"no"}</ListGroup.Item>
      <ListGroup.Item>Adress : {house.adress}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      { HouseEditDelete? <HouseEditDelete house={house}/> : "" }
      { HouseReviewLike? <HouseReviewLike id={house.id}/> : "" }
    </Card.Body>
  </Card>
      </div>
    )
}

export default HouseCard;