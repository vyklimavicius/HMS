import React from 'react';
import CreateEvent from '../EventComponents/CreateEvent';
import Event from '../EventComponents/Event'
import { connect } from 'react-redux';
import { handleEventChange, deleteEvent, handleMemberChange} from '../../Actions/index';
import AddMember from '../EventComponents/AddMember';
import Member from '../EventComponents/Member';

const EventDashboard = (props) => {

    
    
    return (
        <div>
            <h2>This is the Event dashboard</h2>
            {props.arrayEvents.length > 0 ? props.arrayEvents.map(event => {
                return <Event event={event} />
            }) : null}
            {props.clickedEvent ? <CreateEvent /> : null}
            {props.arrayMembers.length > 0 ? props.arrayMembers.map(member => {
                return <Member member={member} />
            }) : null}
            {props.clickedMember ? <AddMember /> : null}
            <button onClick={() => props.handleMemberChange(props.clickedMember)}>Add a member</button>
            <button onClick={() => props.handleEventChange(props.clickedEvent)}>Create event</button>
            <button onClick={props.deleteEvent}>Delete event</button>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        arrayMembers: state.changesEventDashboard.members,
        arrayEvents: state.changesEventDashboard.events,
        clickedEvent: state.changesEventDashboard.clickedEvent,
        clickedMember: state.changesEventDashboard.clickedMember,
        arrayMembers: state.changesEventDashboard.members
    }
}

export default connect(mapStateToProps, { handleEventChange, deleteEvent, handleMemberChange })(EventDashboard);
