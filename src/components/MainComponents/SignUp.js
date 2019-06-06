import React from 'react';
import { connect } from 'react-redux';
import { getUserSignUp } from '../../Actions/index';


const SignUp = (props) => {

       const userData = {
         username: null,
         name: null,
         lastname: null,
         email: null,
         password: null,
         image: null
        };

        const handleChange = (e) => {
            userData[e.target.name]= e.target.value;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            props.getUserSignUp(userData);
        };
        

        return(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" value={props.signUp.username} onChange={handleChange}></input>
                    <input type="text" placeholder="Name" name="name" value={props.signUp.name} onChange={handleChange}></input>
                    <input type="text" placeholder="Last Name" name="lastname" value={props.signUp.lastname} onChange={handleChange}></input>
                    <input type="email" placeholder="Email" name="email" value={props.signUp.email} onChange={handleChange}></input>
                    <input type="password" placeholder="Password" name="password" value={props.signUp.password} onChange={handleChange}></input>
                    <input type="file" placeholder="Upload Image" name="image" value={props.signUp.image} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>
                </form>
            </div>
        )

};

const mapStateToProps = (state) => {
    return { signUp: state.userSignUp }
};

export default connect(mapStateToProps, { getUserSignUp } )(SignUp);