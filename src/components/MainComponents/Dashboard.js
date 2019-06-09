import React from 'react';
import UserDetails from '../SecondaryComponents/UserDetails';
import { connect } from 'react-redux';
import TaskBar from '../SecondaryComponents/TaskBar';
import EventDashboard from '../SecondaryComponents/EventDashboard';
import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';


// import Box from '@material-ui/core/Box';
// import { borders, flexbox, sizing } from '@material-ui/system';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';


const Dashboard = (props) => {

        
    if (props.currentUser){
        return (
            <div>
                
                <Typography align='center'>
                <h1>This is the Dashboard</h1>
                </Typography>
                {/* <Drawer> */}
                <UserDetails user={props.currentUser} />
                {/* </Drawer> */}
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