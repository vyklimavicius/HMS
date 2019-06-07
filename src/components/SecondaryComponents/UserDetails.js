import React from 'react';



const UserDetails = (props) => {

    // console.log(props);

    const handleSubmit = () => {
      localStorage.clear();  
      window.location.href = '/login';
    }
    
    return (
        <div>
            <h2>User details</h2>
            {/* <img src={props.user.image} alt={props.user.name}></img> */}
            <h3>{props.user.username}</h3>
            <h4>{props.user.name}</h4>
            <h5>{props.user.lastname}</h5>
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
}



export default UserDetails;