import React from 'react';
import { connect } from 'react-redux'; 
import { handleMemberChange, memberChange, addMember } from '../../Actions/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const AddMember = (props) => {

    const useStyles = makeStyles(theme => ({
        card: {
            margin: theme.spacing(1),
            border: '1px solid black',
            width: 350,
            marginLeft: 350,
            marginTop: 30,
            paddingLeft: 140,
            backgroundColor: 'white',
            boxShadow: '10px 10px #16162D'
        }, cardAction: {
            marginLeft: 40
        }, button: {
            color: 'red'
        }
    }));

    const classes = useStyles();
    
    const handleChange = (e) => {
        props.memberChange({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let nam = props.name;
        props.addMember({ name: nam});
    }

    return (
        <Card className={classes.card}>
            <Typography style={{marginLeft: 25}}>
            {props.event[0] ? <h3>Add a new Member to: {props.event[0].name}</h3> :
             <h3>Add a new Member</h3>
             }
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                id="outlined-bare"
                name="memberName"
                value={props.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                <TextField
                    className={classes.button}
                    value="Add"
                    type="submit"
                    margin="normal"
                    variant="outlined"
                />
            </form>
            <CardActions className={classes.cardAction}>
             <Button onClick={() => props.handleMemberChange(props.clickedMember)}>No new members</Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = (state) => {
    console.log(state.changesEventDashboard.events);
    
    return {
        name: state.changesEventDashboard.memberName,
        clickedMember: state.changesEventDashboard.clickedMember,
        event: state.changesEventDashboard.events
    }
}

export default connect(mapStateToProps, {handleMemberChange, memberChange, addMember})(AddMember);
