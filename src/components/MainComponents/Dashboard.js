import React from 'react';
import UserDetails from '../SecondaryComponents/UserDetails';
import { connect } from 'react-redux';
import TaskBar from '../SecondaryComponents/TaskBar';
import EventDashboard from '../SecondaryComponents/EventDashboard';

const Dashboard = (props) => {
        
        
    if (props.currentUser){
        return (
            <div>
                <h1>This is the Dashboard</h1>
                <UserDetails user={props.currentUser} />
                <TaskBar />
                <EventDashboard />
            </div>
        );
    } else {
        return(
            <div>
            {window.location.href = '/login'};
            </div>
         );
    }
};

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Dashboard);