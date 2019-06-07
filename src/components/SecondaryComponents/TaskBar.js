import React from 'react';
import CreateTasks from '../TaskComponents/CreateTasks';
import { connect } from 'react-redux';
import { handleChange } from '../../Actions/index'
import Task from '../TaskComponents/Task';

const TaskBar = (props) => {

    // console.log(props.tasks);
    
    return (
        <div>
            <h2>This is the TaskBar</h2>
            {props.tasks.map( task => {
                return <Task task={task}/>
            })}
            {props.clicked.clicked ? <CreateTasks name={props.name} description={props.description}/> : null}
            <button onClick={() => props.handleChange(props.clicked)}>Create task</button>
            <button onClick={null}>Delete task</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.changesTask);
    
    return { 
        name: state.changesTask.name,
        description: state.changesTask.description,
        clicked: state.changesTask,
        tasks : state.changesTask.tasks 
    }
}

export default connect(mapStateToProps, { handleChange })(TaskBar);
