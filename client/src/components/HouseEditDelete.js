import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HouseEditDelete({house}){

    function handleDelete(event){
        fetch(`/houses/${house.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
          }).then(res => console.log(res))
    }

    return(
        <>
        <Card.Body>
            <Button variant="danger" onClick={(e)=>handleDelete(e)}>Delete</Button>{' '}
            <Button variant="outline-warning">Update</Button>
        </Card.Body>
        </>
    )
}
export default HouseEditDelete;