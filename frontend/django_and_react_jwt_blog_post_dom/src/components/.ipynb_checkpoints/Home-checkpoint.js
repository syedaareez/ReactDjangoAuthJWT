import React,{useState} from "react";
import { Navbar } from "../pages/Navbar";
import "../style/home.css";
import JoinForm from "../pages/JoinForm";

function Home(props) {
  
  return (
    <div className="home-page">
       <Navbar logout={props.logout}  />
        <br />
        <br />
       <JoinForm token={props.token} />
    </div>
  );
};
export default Home;
