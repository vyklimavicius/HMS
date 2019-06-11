import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const UserDetails = (props) => {


    const handleSubmit = () => {
      localStorage.clear();  
      window.location.href = '/login';
    };

    // const stylingAvatar = makeStyles({
    //     avatar: {
    //         margin: 10,
    //         width: 80,
    //         height: 100,
    //     }
    // });

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
        }
    });

    const classes = stylingAvatar();

    return (
        <div>
            <Avatar src={props.user.image} alt={props.user.name} className={classes.avatar}></Avatar>
            <Typography align='center'>
            <h2>User details</h2>
            <h3>{props.user.username}</h3>
            <h4>{props.user.name}</h4>
            <h5>{props.user.lastname}</h5>
            <button onClick={handleSubmit}>Logout</button>
            </Typography>
        </div>
    )
}



export default UserDetails;