import React from 'react';
import CreateTasks from '../TaskComponents/CreateTasks';
import { connect } from 'react-redux';
import { handleBoolChange, deleteTask } from '../../Actions/index'
import Task from '../TaskComponents/Task';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

const TaskBar = (props) => {

    // console.log(props.tasks);
    
        return (
                <div>
                    <Typography>
                    <h2>This is the TaskBar</h2>
                    </Typography>
                    {props.tasks.length > 0 ? props.tasks.map(task => {
                        return <Task task={task} />
                    }) : null}
                {props.clicked.clicked ? <CreateTasks name={props.name} description={props.description} /> : null}
                
                <button onClick={() => props.handleBoolChange(props.clicked)}>Create task</button>
                <button onClick={props.deleteTask}>Delete task</button>  
                </div>
        );
};

const mapStateToProps = (state) => {
    
    return { 
        name: state.changesTask.name,
        description: state.changesTask.description,
        clicked: state.changesTask,
        tasks : state.changesTask.tasks 
    }
}

export default connect(mapStateToProps, { handleBoolChange, deleteTask })(TaskBar);
