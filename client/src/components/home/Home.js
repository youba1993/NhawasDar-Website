import React from "react";
import NavBar from '../home/NavBar';
import MainPageSearch from '../home/MainPageSearch';
import Footer from "./Footer";
import { useSelector } from "react-redux";
import HomeCarousel from "./HomeCarrousel";

function Home() {
  const currentUser = useSelector(state => state.auth);
  const landlord = currentUser.landlord;

  return (
    <div>
      <div className="p-5 bg-image" id="home">
        <HomeCarousel />
        {landlord && <h1 id="welcome"> Welcome to your Account: {landlord.first_name}</h1>}
        {!landlord && <MainPageSearch />}
      </div>
      
    </div>
  )
}
export default Home;