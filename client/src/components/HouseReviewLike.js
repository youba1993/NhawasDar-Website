import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ToggleButton from 'react-bootstrap/ToggleButton';

function HouseReviewLike({id}) {

    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LikeButton = () => {
      const [likes, setLikes] = useState();
      const [isClicked, setIsClicked] = useState(false);
      const [checked, setChecked] = useState(false);
    
      useEffect(()=>{
        fetch(`/house_likes/${id}`,{
          method: 'GET',
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `Berear ${localStorage.getItem("token")}`
          }, 
        }).then((res)=> res.json())
          .then((resp)=>{
            console.log(resp)
            setLikes(resp.count)
            setChecked(resp.like)
            setIsClicked(resp.like)
          } )
      },[])
      
      const handleClick = () => {
        if (isClicked) {
          // Dislike
          fetch(`/house_likes/${id}`,{
            method: 'DELETE',
            headers: {
              "Content-Type": "Application/json",
              "Authorization": `Berear ${localStorage.getItem("token")}`
            }, 
          })
          setLikes(likes - 1);
          setChecked(!isClicked);
        } else {
          //  like 
          fetch(`/house_likes`,{
            method: 'POST',
            headers: {
              "Content-Type": "Application/json",
              "Authorization": `Berear ${localStorage.getItem("token")}`
            }, 
            body: JSON.stringify({"id": id})
          })
          setLikes(likes + 1);
          setChecked(!isClicked);
        }
        setIsClicked(!isClicked);
      };
    
      return (
          
        <ToggleButton type="checkbox" variant="outline-danger" checked={checked} onClick={ handleClick }>
          <span className="likes-counter">{ `Like | ${likes}` }</span>
        </ToggleButton>
      );
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Reviews
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>House Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    House Reviews here !
                </Offcanvas.Body>
            </Offcanvas>

            <LikeButton />
        </>
    )
}
export default HouseReviewLike;


  