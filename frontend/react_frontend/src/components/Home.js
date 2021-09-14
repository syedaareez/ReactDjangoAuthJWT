import React,{useState} from "react";
import { Navbar } from "../pages/Navbar";
import "../style/home.css";
import JoinForm from "../pages/JoinForm";
import CreateForm from "../pages/CreateForm";
import Subjects from '../pages/Subjects'
import Sub from '../pages/Sub'

function Home(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const [subDet, setSubDet] = useState([])
  
  const OpenIt=(sub)=>{
      setSubOpen(true);
      setSubDet(sub);
  }
  
  return (
    <div className="home-page">
       <Navbar logout={props.logout} modalOpen = {modalOpen} setModalOpen = {setModalOpen} />
        <br />
        <br />
       
      {modalOpen?(<div><JoinForm /><CreateForm /></div>):''}
      {subOpen?(<div><Sub subDet={subDet} setSubOpen= {setSubOpen} /></div>):<Subjects OpenIt= {(sub)=>OpenIt(sub)}/>}
       
    </div>
  );
};
export default Home;
