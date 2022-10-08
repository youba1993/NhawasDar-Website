import React from "react";
import NavBar from '../home/NavBar';
import MainPageSearch from '../home/MainPageSearch';
import Footer from "./Footer";



function Home(){
    
    return (
      <div className="p-5 bg-image" id="home">
        <NavBar />
        <br/>
        <MainPageSearch />
        <Footer/>
      </div>

    )
}
export default Home;