import React from 'react';
import { connect } from 'react-redux';
import { handleEventChange, eventChange, addEvent } from '../../Actions/index';

const CreateEvent = (props) => {

    const handleChange = (e) => {
        props.eventChange({ [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let img = props.eventProps.image;
        let nam = props.eventProps.name;
        let descr = props.eventProps.description;
        // debugger
        props.addEvent({ image: img, name: nam, description: descr });
    };

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <input type="url" placeholder="https://example.com" value={props.eventProps.image} name="image" onChange={handleChange}></input>
                <input type="text" placeholder="name" value={props.eventProps.name} name="name" onChange={handleChange}></input>
                <input type="text" placeholder="description" value={props.eventProps.description} name="description" onChange={handleChange}></input>
                <input type="submit" value="Create"></input>
            </form>
            <button onClick={() => props.handleEventChange(props.clickedEvent)}>Not today!</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.changesEventDashboard);

    return {
        eventProps: state.changesEventDashboard,
        clickedEvent: state.changesEventDashboard
    }
}



export default connect( mapStateToProps, {handleEventChange, eventChange, addEvent } )(CreateEvent);
