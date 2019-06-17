import React from 'react';
import CreateTasks from '../TaskComponents/CreateTasks';
import { connect } from 'react-redux';
import { handleBoolChange, deleteTask } from '../../Actions/index'
import Task from '../TaskComponents/Task';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

const TaskBar = (props) => {

    const useStyles = makeStyles(theme => ({
        card: {
            margin: theme.spacing(1),
            width: 350,
            marginLeft: 350,
            marginTop: 30,
            paddingLeft: 140,
            backgroundColor: '#16162D',
        }, button: {
            color: 'white'
        }
        }));

        const classes = useStyles();
    
        return (    
                <div>
                    <Typography style={{textAlign: 'center'}}>
                    <img style={{ marginLeft: 0 }} src="http://localhost:3000/taskbar.png" alt="taskbar"></img>
                    </Typography>
                    {props.tasks.length > 0 ? props.tasks.map(task => {
                        return <Task task={task} />
                    }) : null}
                {props.clicked.clicked ? <CreateTasks name={props.name} description={props.description} /> :
                <Card className={classes.card}>
                <Button className={classes.button} onClick={() => props.handleBoolChange(props.clicked)}>Create task</Button>
                <Button className={classes.button} onClick={props.deleteTask}>Delete task</Button>  
                </Card>}
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
