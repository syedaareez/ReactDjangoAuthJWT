import React from "react";
import Nav from "../components/Nav";
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Successful from './successful';
import Home from "../components/Home";

class LoginSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
        error:false,
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://127.0.0.1:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        if(json.user){
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username,
            error:false,
        });
           var form=null;
        }else{
            this.setState({
                error:true,
            })
        }
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };
 handle_home=()=>{
     this.setState({ logged_in: false, username: '' });
 }

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username,
        });
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

    
    render(){
        
           let form;
            switch (this.state.displayed_form) {
              case 'login':
                form = <LoginForm handle_login={this.handle_login} handleError={this.state.error} />;
                break;
              case 'signup':
                form = <SignupForm handle_signup={this.handle_signup} />;
                break;
              default:
                form = <SignupForm handle_signup={this.handle_signup} />;
            }

        
          return (
              <div>
            <div className="login-sign-page">
              <div className="login-sign">
                <Nav
                  logged_in={this.state.logged_in}
                  display_form={this.display_form}
                  handle_logout={this.handle_logout}
                />
                
                {this.state.logged_in
                ? ''
                : (<div>{form}</div>)}
              </div>
              
            </div>
                {this.state.logged_in
                ? (<Home />)
                : ''}   
            </div>
          );
    }
};

export default LoginSign;
