import React from 'react';
import CreateEvent from '../EventComponents/CreateEvent';
import Event from '../EventComponents/Event'
import { connect } from 'react-redux';
import { handleEventChange, deleteEvent, handleMemberChange} from '../../Actions/index';
import AddMember from '../EventComponents/AddMember';
import Member from '../EventComponents/Member';
import Notification from '../EventComponents/Notification';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const EventDashboard = (props) => {

    const useStyles = makeStyles(theme => ({
        card: {
            margin: theme.spacing(1),
            width: 350,
            marginLeft: 350,
            marginTop: 30,
            paddingLeft: 140,
            backgroundColor: '#16162D',
        },  button: {
            color: 'white'
        }, memberCard: {
            margin: theme.spacing(1),
            width: 100,
            marginLeft: 530,
            marginTop: 30,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#16162D',
        }
    }));

    const classes = useStyles();
    
    
    return (
        <div>
            <Typography style={{textAlign: 'center'}}>
            <img style={{ marginLeft: 0 }} src="http://localhost:3000/eventDash.png" alt="event"></img>
            </Typography>
            <br></br>
            <br></br>
            {props.arrayEvents.length > 0 ? props.arrayEvents.map(event => {
                return <Event event={event} />
            }) : null}
            {props.clickedEvent ? <CreateEvent /> : null}
            {props.arrayMembers.length > 0 ? props.arrayMembers.map(member => {
                return <Member member={member} />
            }) : null}
            {props.clickedMember ? <AddMember /> : null}
            <Card className={classes.memberCard}>
            <Button className={classes.button} onClick={() => props.handleMemberChange(props.clickedMember)}>Add a member</Button>
            </Card>
            <Notification />
             {props.arrayEvents.length > 0 ? null : 
                <Card className={classes.card}>
                 <Button className={classes.button} onClick={() => props.handleEventChange(props.clickedEvent)}>Create event</Button>
                 <Button className={classes.button} onClick={props.deleteEvent}>Delete event</Button>
                </Card>
             }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        arrayEvents: state.changesEventDashboard.events,
        clickedEvent: state.changesEventDashboard.clickedEvent,
        clickedMember: state.changesEventDashboard.clickedMember,
        arrayMembers: state.changesEventDashboard.members
    }
}

export default connect(mapStateToProps, { handleEventChange, deleteEvent, handleMemberChange })(EventDashboard);
