import React from 'react';
import CreateEvent from '../EventComponents/CreateEvent';
import { connect } from 'react-redux';
import { handleEventChange} from '../../Actions/index';

const EventDashboard = (props) => {

    // console.log(props);
    
    return (
        <div>
            <h2>This is the Event dashboard</h2>
            {/* <image src="" alt=""></image> */}
            {props.events.clicked ? <CreateEvent /> : null}
            <button onClick={() => props.handleEventChange(props.events.clicked)}>Create event</button>
            <button onClick={null}>Delete event</button>

        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.changesEventDashboard);

    return {
        events: state.changesEventDashboard
    }
}

export default connect(mapStateToProps, { handleEventChange })(EventDashboard);
