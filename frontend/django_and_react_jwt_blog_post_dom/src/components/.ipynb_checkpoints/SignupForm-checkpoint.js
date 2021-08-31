import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)} className='form'>
       <h2>Create your Account</h2>
        {/* <label htmlFor="username">Username</label> */}
        <input
        className='input'
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
        className='input'
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" className='submit-btn' value="SignUp"/>
        <br />
        {this.props.Nosign?(<p className="wrong">Username already Exists</p>):``}
         <br />
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
