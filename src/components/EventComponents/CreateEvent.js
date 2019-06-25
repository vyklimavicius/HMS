import React from 'react';
import { connect } from 'react-redux';
import { handleEventChange, eventChange, addEvent } from '../../Actions/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CreateEvent = (props) => {

    const handleChange = (e) => {
        props.eventChange({ [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let img = props.eventProps.image;
        let nam = props.eventProps.name;
        let descr = props.eventProps.description;
        props.addEvent({ image: img, name: nam, description: descr });
    };

    const useStyles = makeStyles(theme => ({
        card: {
            width: 250,
            marginBottom: 0,
            marginLeft: 940,
            marginTop: -490,
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

    return (
        <Card className={classes.card}>
            <br></br>
            <Typography>
            <img style={{ marginLeft: 45 }} src="http://localhost:3000/createEvent.png" alt="taskbar"></img>
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
                id="standard-name"
                label="Image Url"
                className={classes.textField}
                type="url"
                name="image"
                value={props.eventProps.image}
                onChange={handleChange}
                margin="normal"
                />
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                type="text"
                name="name"
                value={props.eventProps.name}
                onChange={handleChange}
                margin="normal"
                />
            <TextField
                id="standard-name"
                label="Description"
                className={classes.textField}
                type="text"
                name="description"
                value={props.eventProps.description}
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
                    marginLeft: 80
                    }}
                />
                {/* <input type="url" placeholder="https://example.com" value={props.eventProps.image} name="image" onChange={handleChange}></input> */}
                {/* <input type="text" placeholder="name" value={props.eventProps.name} name="name" onChange={handleChange}></input> */}
                {/* <input type="text" placeholder="description" value={props.eventProps.description} name="description" onChange={handleChange}></input> */}
                {/* <input type="submit" value="Create"></input> */}
            </form>
            <CardActions>
                <Button onClick={() => props.handleEventChange(props.clickedEvent)}>Let's task!</Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        eventProps: state.changesEventDashboard,
        clickedEvent: state.changesEventDashboard
    }
}



export default connect( mapStateToProps, {handleEventChange, eventChange, addEvent } )(CreateEvent);
