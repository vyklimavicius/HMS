import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../../Actions/index';



const Login = (props) => {

    const userLog = {
      email: null,
      password: null,
      passwordConfirmation: null
    };

    const handleChange = (e) => {
        userLog[e.target.name] = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getUserLogin(userLog);
    }

    console.log(props);
    
    return (
        <div>
         <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={props.user.email} onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Password" 
             value={props.user.password} onChange={handleChange}></input>
            <input type="password" name="passwordConfirmation" placeholder="Confirm Password" 
             value={props.user.passwordConfirmation} onChange={handleChange}></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
    )

};

const mapStateToProps = (state) => {
    return { user: state.userLogin}
}

export default connect(mapStateToProps, { getUserLogin })(Login);