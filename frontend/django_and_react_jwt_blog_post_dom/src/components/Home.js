import React from "react";
import { Navbar } from "../pages/Navbar";
import "../style/home.css";


function Home(props) {
  
 
  return (
    <div className="home-page">
       <Navbar logout={props.logout}/>
    </div>
  );
};
export default Home;
