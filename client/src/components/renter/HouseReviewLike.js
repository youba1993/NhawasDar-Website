import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import {HouseUpdate} from '../redux/actions/HouseActions'

function HouseReviewLike({ house }) {
    const  dispatch = useDispatch();

  // like handling ---------------------------------------------------------------------

  const LikeButton = () => {
    const [likes, setLikes] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      let controller = new AbortController();
      fetch(`/house_likes/${house.id}`, {
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
        fetch(`/house_likes/${house.id}`, {
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
          body: JSON.stringify({ "id": house.id })
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

  function setContract(){
      dispatch(HouseUpdate(house))
  }

  // review handling --------------------------------------------------------------------

  const [show, setShow] = useState(false);

  //-----------------------------------------------------------------------------------



  return (
    <div>
       <Link to="/renter/newcontract">
        <Button variant="info" onClick={()=>setContract()}>
          Contract
        </Button>
        </Link>
      {' '}
      <Button variant="primary" onClick={() => setShow(true)}>
        Reviews
      </Button>
      {' '}
      {show ? <Reviews setShow={setShow} show={show} id={house.id} /> : ""}
      <LikeButton />
    </div>
  )
}
export default HouseReviewLike;


