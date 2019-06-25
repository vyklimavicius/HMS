import React from 'react';
import { connect } from 'react-redux';
import { getUserSignUp, handleUserSignUp } from '../../Actions/index';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const SignUp = (props) => {

    
        const handleChange = (e) => {
            props.handleUserSignUp({[e.target.name]: e.target.value})
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            props.getUserSignUp(props.signUp);
        };

        // Styling
        const useStyles = makeStyles(theme => ({
        textField: {
            marginLeft: 50,
            marginRight: 50
            }, avatar: {
                margin: 0,
                marginLeft: 250,
                width: 100,
                height: 120,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '3px'
            }
       }
       ));

        const classes = useStyles();
        
        return(
            <Grid container>
                <Paper style={{ border: '1px solid grey', boxShadow: '10px 10px #16162D', padding: 5, marginTop: 50, marginBottom: 100, height: 600, width: 600, marginLeft: 400 }}>
                <Typography>
                <img style={{ marginLeft: 240, marginTop: 20 }} src="http://localhost:3000/hms.png" alt="logo"></img>
                </Typography>
                <br></br>
                <Avatar src="http://localhost:3000/avatar.png" alt="avatar" className={classes.avatar}></Avatar>
                <form onSubmit={handleSubmit}>
                <TextField
                id="outlined-username-input"
                label="Username"
                className={classes.textField}
                type="text"
                name="username"
                value={props.signUp.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
                />
                <TextField
                id="outlined-name-input"
                label="Name"
                className={classes.textField}
                type="text"
                name="name"
                value={props.signUp.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
                />
                <TextField
                id="outlined-lastname-input"
                label="Lastname"
                className={classes.textField}
                type="text"
                name="lastname"
                value={props.signUp.lastname}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
                />
                <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                value={props.signUp.lastname}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
                />
                <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                value={props.signUp.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
                />
                <TextField
                id="outlined-url-input"
                label="Avatar Url"
                className={classes.textField}
                type="url"
                name="image"
                value={props.signUp.image}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                 <TextField
                className={classes.textField}
                value="Sign me up!"
                type="submit"
                margin="normal"
                variant="outlined"
                style={{ marginLeft: 200, marginTop: 30, width: 200, backgroundColor: 'rgba(0,0,255,0.3)'}}
                />
                {/* <input type="text" placeholder="Username" name="username" value={props.signUp.username} onChange={handleChange}></input> */}
                    {/* <input type="text" placeholder="Name" name="name" value={props.signUp.name} onChange={handleChange}></input>
                    <input type="text" placeholder="Last Name" name="lastname" value={props.signUp.lastname} onChange={handleChange}></input> */}
                    {/* <input type="email" placeholder="Email" name="email" value={props.signUp.email} onChange={handleChange}></input> */}
                    {/* <input type="password" placeholder="Password" name="password" value={props.signUp.password} onChange={handleChange}></input> */}
                    {/* <input type="url" placeholder="Upload http://image.com" name="image" value={props.signUp.image} onChange={handleChange}></input> */}
                {/* <input type="submit" value="Submit"></input> */}
                </form>
                </Paper>
            </Grid>
        )

};

const mapStateToProps = (state) => {
    console.log(state);
    return { signUp: state.changesInState }
};

export default connect(mapStateToProps, { getUserSignUp, handleUserSignUp } )(SignUp);