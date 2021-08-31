import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../style/login.css";

function successful(props) {
    var username=props.user;
  return <div className="successWrapper">
              <h2>Welcome {username}</h2>
              <h2>You are sucessfully logged in</h2>
              <Link onClick={props.home} to='/home' className="home">Home</Link>
         </div>;
}

export default successful;