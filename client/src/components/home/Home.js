import React from "react";
import NavBar from '../home/NavBar';
import MainPageSearch from '../home/MainPageSearch';
import Footer from "./Footer";
import { useSelector } from "react-redux";
import HomeCarousel from "./HomeCarrousel";

function Home() {
  const currentUser = useSelector((state) => { return state.auth })

  const landlordUser = () => {
    if (currentUser.landlord !== undefined) {
      return <h1 id="welcome"> Welcome to your Account: {currentUser.landlord.first_name}</h1>
    } else return <MainPageSearch />
  }

  return (
    <div>
      <div className="p-5 bg-image" id="home">
        <NavBar />
        <br />
        <HomeCarousel />

          { landlordUser() }
        </div>
      <div>
        <Footer />
      </div>


    </div>
  )
}
export default Home;