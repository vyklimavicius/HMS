import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



const UserDetails = (props) => {

    // console.log(props);

    const handleSubmit = () => {
      localStorage.clear();  
      window.location.href = '/login';
    };

    const stylingAvatar = makeStyles({
        avatar: {
            margin: 10,
            width: 80,
            height: 100,
        }
    });

    const classes = stylingAvatar();

    return (
        <div>
            <h2>User details</h2>
            <Avatar src={props.user.image} alt={props.user.name} className={classes.avatar}></Avatar>
            <h3>{props.user.username}</h3>
            <h4>{props.user.name}</h4>
            <h5>{props.user.lastname}</h5>
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
}



export default UserDetails;