import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ToggleButton from 'react-bootstrap/ToggleButton';

function HouseReviewLike({id}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LikeButton = () => {
        const [likes, setLikes] = useState(100);
        const [isClicked, setIsClicked] = useState(false);
        const [checked, setChecked] = useState(false);
      
        const handleClick = () => {
          if (isClicked) {
            setLikes(likes - 1);
            setChecked(!isClicked);
          } else {
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



  
  