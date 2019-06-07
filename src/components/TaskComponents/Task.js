import React from 'react';

const Task = (props) => {

    // console.log(props.task);
    
    return (
        <div>
            <h3>{props.task.name}</h3>
        </div>
    );
}

export default Task;
