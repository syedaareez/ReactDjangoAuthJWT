import React from "react";
import PropTypes from "prop-types";
import "../style/login.css";
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
        <div>
      <form onSubmit={(e) => this.props.handle_login(e, this.state)} className='form'>
        
        <h2>Log In</h2>
        {/* <label htmlFor="username">Username</label> */}
        <input
          className="input"
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" className='submit-btn' />
      </form>
      <br />
      {this.props.handleError?(<p className="wrong">Wrong Credentials</p>):``}
    </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired,
};
