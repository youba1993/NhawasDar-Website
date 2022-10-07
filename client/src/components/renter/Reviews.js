import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export default function Reviews({show, setShow, id}){
    const [reviews, setReviews] = useState([])
    const [comment, setComment] = useState("")
    const handleClose = () => setShow(false);

    useEffect(()=>{
        let controller = new AbortController();
        fetch(`/house_reviews/${id}`, {
            method: 'GET',
            headers: {
              "Content-Type": "Application/json",
              "Authorization": `Berear ${localStorage.getItem("token")}`
            },
          }).then((res) => res.json())
            .then((resp) => setReviews(resp))

            return () => controller?.abort();
    },[])
    
    function handledelete(){
        fetch(`/house_reviews/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Berear ${localStorage.getItem("token")}`
              },
        }).then((res)=> res.json())
          .then((res)=> setReviews([reviews.filter((review)=> review.id !== res.id)]))
    }

    function reviewSubmit(e) {
        e.preventDefault()
        fetch("/house_reviews", {
          method: 'POST',
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `Berear ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ "id": id, "comment": comment })
        }).then((res) => res.json())
        .then((res) => {
            if (res.error)
            setReviews(reviews)
            else
            setReviews([...reviews , res])
          })
          setComment(" ")
      }


return(
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>House Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

           { reviews? reviews.map((review, index) => {
            return <Alert key={index} onClose={() => handledelete()} variant="success" dismissible>{review.comment} </Alert>}
          ): null}        

          <Form.Group className="mb-3" >
            <Form.Control as="textarea" rows={3} onChange={(e) =>setComment(e.target.value)} value={comment} /> <br />
            <Button variant="primary" type="submit" size="sm" onClick={(e) => reviewSubmit(e)} >
              Submit
            </Button>
          </Form.Group>
        </Offcanvas.Body>
      </Offcanvas>
)
}