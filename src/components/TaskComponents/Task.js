import React from 'react';
// import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Draggable, {DraggableCore} from 'react-draggable';

const Task = (props) => {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
            backgroundColor: '#16162D',
            color: 'white'
        },
        input: {
            display: 'none',
        },
    }));

    const classes = useStyles();
    
    return (
        
        <Button variant="contained"  size="large" className={classes.button}>
            {props.task.name}
        </Button>
    );
}

export default Task;
