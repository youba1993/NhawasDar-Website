import { useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

function HousesIndex(){
    const [houses, setHouses] = useState([]);
   
     useEffect(()=>{
        fetch("/houses",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res=>res.json())
           .then(result=> setHouses(result))
     },[])
     

    return (
        <CardGroup>
        <Row xs={2} md={3} className="g-3"> 
         {
         houses.map((house, index)=>{
              return   <HouseCard  key={index} house={house}/>
         })
         }
          </Row>
        </CardGroup>
    )
}

export default HousesIndex;