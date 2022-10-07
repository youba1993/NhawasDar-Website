import React from "react";
import NavBar from '../home/NavBar';
import MainPageSearch from '../home/MainPageSearch';


function Home(){
    
    return (
      <div className="p-5 bg-image" id="home">
        <NavBar />
        <br/>
        <MainPageSearch />
      </div>
    )
}
export default Home;