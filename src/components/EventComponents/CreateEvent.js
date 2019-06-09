import React from 'react';
import { connect } from 'react-redux';
import { handleEventChange } from '../../Actions/index';

const CreateEvent = (props) => {
    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={null}>
                <input type="url" placeholder="https://example.com" name="image" onChange={null}></input>
                <input type="text" placeholder="name" value={null} name="name" onChange={null}></input>
                <input type="text" placeholder="description" value={null} name="description" onChange={null}></input>
                <input type="submit" value="Create"></input>
            </form>
            <button onClick={() => props.handleEventChange(props.clicked)}>Not today!</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.changesEventDashboard.clicked);

    return {
        clicked: state.changesEventDashboard
    }
}



export default connect( mapStateToProps, {handleEventChange } )(CreateEvent);
