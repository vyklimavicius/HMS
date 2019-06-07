import React from 'react';
import CreateEvent from '../EventComponents/CreateEvent';

const EventDashboard = () => {
    return (
        <div>
            <h2>This is the Event dashboard</h2>
            <image src="" alt=""></image>
            <CreateEvent />
            <button onClick={null}>Create event</button>
            <button onClick={null}>Delete event</button>

        </div>
    );
}

export default EventDashboard;
