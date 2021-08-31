import React,{useState} from "react";
import { Navbar } from "../pages/Navbar";
import "../style/home.css";
import JoinForm from "../pages/JoinForm";
import CreateForm from "../pages/CreateForm";

function Home(props) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="home-page">
       <Navbar logout={props.logout} modalOpen = {modalOpen} setModalOpen = {setModalOpen} />
        <br />
        <br />
       <JoinForm />
      {modalOpen?(<div><CreateForm /></div>):''}
      
    </div>
  );
};
export default Home;
