import React from 'react';

const Event = (props) => {
    console.log(props);
    
    return (
        <div>
         <img src={props.event.image} alt={props.event.name}></img>
         <h3>{props.event.name}</h3>
        </div>
    );
}

export default Event;
