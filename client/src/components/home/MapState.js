import { useState } from "react";
import USAMap from "react-usa-map";
import HousesIndex from "../houses/HousesIndex";
import Footer from "./Footer";
import NavBar from "./NavBar";

function MapState() {
  const [result, setResult] = useState([]);

 function  mapHandler(event){
    let stateLocked = event.target.dataset.name;
    event.preventDefault();

    fetch("/houses/adress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ "adress": stateLocked }),
    }).then((respense) => {
      if (respense.ok) {
        respense.json()
          .then((res) => {
            if (res.length === 0)
              setResult(false)
            else
              setResult(res)
          })
      }
    })
  };


    return (
      <div className="p-5 bg-image">
        <NavBar />
        <USAMap onClick={(e)=>mapHandler(e)} />
        <br/>
        <br/>
        {result ? <HousesIndex result={result} /> : <div className="error-container" style={{ color: 'red' }}>No entres for this Adress</div>}
        <Footer/>
      </div>
    );
  
}

export default MapState;