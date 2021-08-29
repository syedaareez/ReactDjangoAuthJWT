import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import LoginSign from './pages/LoginSign';
import Home from "./components/Home";
import {Navbar} from "./pages/Navbar";
import "./style/home.css";

class App extends Component {

  handle_logout = () => {
    localStorage.removeItem('token');
  };
  render() {
    

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        
          <Route path='/loginSign'>
           <LoginSign />
          </Route>
          
          <Route exact path='/home'>
            <Home logout={this.handle_logout} />
          </Route>
        
        </Switch>
      </Router>
    );
  }
}

export default App;
