import React,{useState} from 'react';
import PropTypes from 'prop-types';
import "../style/login.css"

function Nav(props) {
    const [signClicked, setSignClicked] = useState(false)
    
  
  const login=()=>{
      props.display_form('login')
      setSignClicked(true)
      
      
  }
  const signup=()=>{
      props.display_form('signup')
      
      
           setSignClicked(false)
      
  }
    
  const logged_out_nav = (
    <ul className="nav-entry">
      <li className={signClicked?'':'inset'} onClick={()=>signup()} >signup</li>
      <li className={signClicked?'inset':''} onClick={()=>login()} >login</li>
      
    </ul>
  );

  return <div>{props.logged_in ? '' : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};

