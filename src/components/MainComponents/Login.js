import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin, handleUserLogin } from '../../Actions/index';
import { Link } from 'react-router-dom';



const Login = (props) => {

  
    const handleChange = (e) => {
        props.handleUserLogin({ [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.user.password !== props.user.passwordConfirmation) {
          alert("Password confirmation don't match!")
        } else {
          props.getUserLogin(props.user);
        }
    }

    return (
        <div>
         <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={props.user.email} onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Password" 
             value={props.user.password} onChange={handleChange}></input>
            <input type="password" name="passwordConfirmation" placeholder="Confirm Password" 
             value={props.user.passwordConfirmation} onChange={handleChange}></input>
            <input type="submit" value="Let's task"></input>
            <Link to="/signup">New member?</Link>
          </form>
        </div>
    )

};

const mapStateToProps = (state) => {
  return { user: state.userLogin}
}

export default connect(mapStateToProps, { getUserLogin, handleUserLogin })(Login);