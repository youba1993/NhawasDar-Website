import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';


function HouseCard({ house, HouseEditDelete, HouseReviewLike }) {


  const currentUser = useSelector((state) => { return state })

  const cardOptions = () => {
    if (currentUser.user === undefined) {
      
       return <HouseEditDelete house={house} />
      
    }
    else {
      if (currentUser.user.id !== 0) {
        
        return  <HouseReviewLike id={house.id}/>
        
      } 
    }
  }

  return (
    <Card border="info" style={{ width: '19rem' }} >
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{house.house_type}</Card.Title>
        <Card.Text>
          Amazing {house.house_type} of {house.square_footage} sq with {house.num_beds} bedroom(s) and {house.num_baths} bathroom(s) .
          {house.furnished ? "Furnished" : "not Furnished"}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price : {house.price} $/month</ListGroup.Item>
        <ListGroup.Item>Air conditioner : {house.air_cond ? "yes" : "no"}</ListGroup.Item>
        <ListGroup.Item>Elevator : {house.elevator ? "yes" : "no"}</ListGroup.Item>
        <ListGroup.Item>Adress : {house.adress}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {cardOptions()}
      </Card.Body>
    </Card>
  )
}

export default HouseCard;