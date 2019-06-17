import React from 'react';
import Typography from '@material-ui/core/Typography';

const Event = (props) => {
    // console.log(props);

    const img = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    
    return (
        
            <div>
                <Typography>
                <img style={img}src={props.event.image} alt={props.event.name}></img>
                <h3 style={{textAlign: 'center', marginBottom: 10}}>{props.event.name}</h3>
                </Typography>
            </div>

        
    );
}

export default Event;
