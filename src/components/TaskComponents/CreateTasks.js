import React from 'react';
import { connect } from 'react-redux';
import { handleBoolChange, taskChange, addTask } from '../../Actions/index';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CreateTasks = (props) => {

    const useStyles = makeStyles(theme => ({
        card: {
            width: 250,
            marginBottom: 0,
            marginLeft: 940,
            marginTop: -20,
            paddingLeft: 20,    
            boxShadow: '10px 10px #16162D',
            border: '1px solid black',
            position: 'fixed',
            zIndex: 7
        }, button: {
            backgroundColor: 'rgba(0,0,255,0.3)'
        }, textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: 0,
            width: 100,
        }
    }));

    const classes = useStyles();

    const handleChange = (e) => {
        props.taskChange({ [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let nam = props.name;
        let descr = props.description;
        props.addTask({name: nam, description: descr});
    };

    return (
        <Card className={classes.card}>
            <br></br>
            <Typography>
            <img style={{ marginLeft: 45 }} src="http://localhost:3000/createTask.png" alt="taskbar"></img>
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
            id="standard-name"
            label="Name"
            name="name"
            className={classes.textField}
            value={props.name}
            onChange={handleChange}
            margin="normal"
            />
            <TextField
            id="standard-name"
            label="Description"
            name="description"
            className={classes.textField}
            value={props.description}
            onChange={handleChange}
            margin="normal"
            />
            <TextField
            className={classes.button}
            value="Create"
            type="submit"
            // margin="normal"
            variant="outlined"
            style={{
             marginLeft: 80}}
            />
            {/* <input type="text" placeholder="name" value={props.name} name="name" onChange={handleChange}></input> */}
            {/* <input type="text" placeholder="description" value={props.description} name="description" onChange={handleChange}></input> */}
            {/* <input type="submit" value="Create"></input> */}
            </form>
            <Button onClick={() => props.handleBoolChange(props.clicked)}>Done!</Button>
        </Card>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        clicked: state.changesTask
    }
}
export default connect(mapStateToProps, { handleBoolChange, taskChange, addTask })(CreateTasks);
