import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';


function HouseReviewLike({ id }) {

  // like handling ---------------------------------------------------------------------

  const LikeButton = () => {
    const [likes, setLikes] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      let controller = new AbortController();
      fetch(`/house_likes/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Berear ${localStorage.getItem("token")}`
        },
      }).then((res) => res.json())
        .then((resp) => {
          setLikes(resp.count)
          setChecked(resp.like)
          setIsClicked(resp.like)
        })
      return () => controller?.abort();
    }, [])

    const handleClick = () => {
      if (isClicked) {
        // Dislike
        fetch(`/house_likes/${id}`, {
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
        fetch(`/house_likes`, {
          method: 'POST',
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `Berear ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ "id": id })
        })
        setLikes(likes + 1);
        setChecked(!isClicked);
      }
      setIsClicked(!isClicked);
    };

    return (

      <ToggleButton type="checkbox" variant="outline-danger" checked={checked} onClick={handleClick}>
        <span className="likes-counter">{`Like | ${likes}`}</span>
      </ToggleButton>
    );
  };

  //end like handling ------------------------------------------------------------------

  // review handling --------------------------------------------------------------------

  const [show, setShow] = useState(false);

  //-----------------------------------------------------------------------------------



  return (
    <div>
      <Link to='/renter/contract'>
        <Button variant="info" >
          Contract
        </Button>
      </Link>
      {' '}
      <Button variant="primary" onClick={() => setShow(true)}>
        Reviews
      </Button>
      {' '}
      {show ? <Reviews setShow={setShow} show={show} id={id} /> : ""}
      <LikeButton />
    </div>
  )
}
export default HouseReviewLike;


