import React from 'react';
import CreateEvent from '../EventComponents/CreateEvent';
import Event from '../EventComponents/Event'
import { connect } from 'react-redux';
import { handleEventChange, deleteEvent, handleMemberChange} from '../../Actions/index';
import AddMember from '../EventComponents/AddMember';
import Member from '../EventComponents/Member';
import Notification from '../EventComponents/Notification';
import Typography from '@material-ui/core/Typography';


const EventDashboard = (props) => {

    
    
    return (
        <div>
            <Typography style={{textAlign: 'center'}}>
            <h2>EVENT DASHBOARD</h2>
            </Typography>
            {props.arrayEvents.length > 0 ? props.arrayEvents.map(event => {
                return <Event event={event} />
            }) : null}
            {props.clickedEvent ? <CreateEvent /> : null}
            {props.arrayMembers.length > 0 ? props.arrayMembers.map(member => {
                return <Member member={member} />
            }) : null}
            {props.clickedMember ? <AddMember /> : null}
            <button onClick={() => props.handleMemberChange(props.clickedMember)}>Add a member</button>
            <Notification />
            {/* <Email /> */}
            <div style={{textAlign: 'center'}}>
             <button onClick={() => props.handleEventChange(props.clickedEvent)}>Create event</button>
             <button onClick={props.deleteEvent}>Delete event</button>
            </div>
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
