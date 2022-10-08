import React from "react";
import NavBar from '../home/NavBar';
import MainPageSearch from '../home/MainPageSearch';
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Home(){
  const currentUser = useSelector((state)=> {return state})
  const landlordUser = ()=>{
    if (currentUser.landlord !== undefined){
      return <h1 className="App-link">Welcome back to your Account {currentUser.landlord.first_name}</h1>
    }else return <MainPageSearch />
  }

    return (
      <div className="p-5 bg-image" id="home">
        <NavBar />
        <br/>
        {landlordUser()}
        <Footer/>
      </div>

    )
}
export default Home;