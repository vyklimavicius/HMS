import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';



const UserDetails = (props) => {


    const handleSubmit = () => {
      localStorage.clear();  
      window.location.href = '/login';
    };


    const stylingAvatar = makeStyles({
        avatar: {
            margin: 0,
            width: 100,
            height: 120,
            overflow: 'hidden',
            display: 'inline-block',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '3px'
        }, button: {
            backgroundColor: '#16162D',
            color: 'white'
        }, card: {
            height: 450,
            marginTop: 100,
            paddingTop: 70,
            width: 100,           
            backgroundColor: 'white'            

        }
    });

    const classes = stylingAvatar();

    return (
        <Card className={classes.card}>
            <Avatar src={props.user.image} alt={props.user.name} className={classes.avatar}></Avatar>
            <Typography align='center'>
            <InputLabel htmlFor="component-simple">Username:</InputLabel>
            <h3>{props.user.username}</h3>
            <InputLabel htmlFor="component-simple">Name:</InputLabel>
            <h4>{props.user.name}</h4>
            <InputLabel htmlFor="component-simple">Lastname:</InputLabel>
            <h5>{props.user.lastname}</h5>
            <Button className={classes.button} onClick={handleSubmit}>Logout</Button>
            </Typography>
        </Card>
    )
}



export default UserDetails;