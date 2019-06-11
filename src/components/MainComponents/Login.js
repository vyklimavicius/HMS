import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin, handleUserLogin } from '../../Actions/index';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

    // Styling 
    
  const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: 50,
      marginRight: 50}}
      ));

  const classes = useStyles();

    return (
        <Grid container>
        <Grid item sm>
          <img style={{ border: '3px solid #16162D', width: 800, height: 500, padding: 0, marginTop: 110, marginLeft: 70 }} src="http://localhost:3000/tasking.jpg" alt="task"></img>
        </Grid>
          <Grid item sm>
          <Paper style={{ border: '1px solid grey', boxShadow: '10px 10px #16162D', padding: 5, marginTop: 100, marginBottom: 10, height: 510, width: 300, marginLeft: 30 }}>
            <br></br>
            <img style={{ marginLeft: 90}}src="http://localhost:3000/hms.png" alt="logo"></img>
            <br></br>
            <br></br>
          <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                value={props.user.email}
                onChange={handleChange}
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                value={props.user.password}
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Confirm Password"
                className={classes.textField}
                value={props.user.passwordConfirmation}
                onChange={handleChange}
                type="password"
                name="passwordConfirmation"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                value="Let's task!"
                type="submit"
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 100, backgroundColor: 'rgba(0,0,255,0.3)'}}
            />
          </form>
          <br></br>
            <Link style={{ marginLeft: 100}} to="/signup">New member?</Link>
            </Paper>
          </Grid>
        </Grid>
        
        
    )

};

const mapStateToProps = (state) => {
  return { user: state.userLogin}
}

export default connect(mapStateToProps, { getUserLogin, handleUserLogin })(Login);