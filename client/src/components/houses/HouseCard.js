import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import HouseEditDelete from '../landlord/HouseEditDelete'
import HouseReviewLike from '../renter/HouseReviewLike';

function HouseCard({ house }) {
  const currentUser = useSelector((state) => state.auth.user);

  const renderCardOptions = () => {
    if (!currentUser) {
      return <HouseEditDelete house={house} />;
    } else {
      return currentUser.id !== 0 ? <HouseReviewLike house={house} /> : null;
    }
  };

  return (
    <Card border="info" style={{ width: '19rem' }}>
    <Card.Img variant="top" src={house.image_url} />
    <Card.Body>
      <Card.Title>{house.house_type}</Card.Title>
      <Card.Text>
        Amazing {house.house_type} of {house.square_footage} sq with {house.num_beds} bedroom(s) and {house.num_baths} bathroom(s).
        {house.furnished ? ' Furnished' : ' Not furnished'}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Price: {house.price} $/month</ListGroup.Item>
      <ListGroup.Item>Air conditioner: {house.air_cond ? 'Yes' : 'No'}</ListGroup.Item>
      <ListGroup.Item>Elevator: {house.elevator ? 'Yes' : 'No'}</ListGroup.Item>
      <ListGroup.Item>Address: {house.adress}</ListGroup.Item>
    </ListGroup>
    <Card.Body>{renderCardOptions()}</Card.Body>
  </Card>
  );
}

export default HouseCard;
