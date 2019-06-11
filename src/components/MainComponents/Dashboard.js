import React from 'react';
import UserDetails from '../SecondaryComponents/UserDetails';
import { connect } from 'react-redux';
import TaskBar from '../SecondaryComponents/TaskBar';
import EventDashboard from '../SecondaryComponents/EventDashboard';
import {Grid, Paper} from '@material-ui/core';



const Dashboard = (props) => {

        
    if (props.currentUser){
        return (
            
            <Grid container direction="row" justify='flex-start' spacing={0}>
            {/* <div> */}
                <Grid item xs={1} sm={1} style={{position: 'fixed'}}>
                    <Paper style={{ border: '1px solid #16162D', boxShadow: '10px 10px #16162D', backgroundColor: 'rgba(128,128,0,0.3)', padding: 5, marginTop: 10, marginBottom: 10, height: 720, width:100}}>
                 <UserDetails user={props.currentUser} />
                </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={{ border: '1px solid black', boxShadow: '10px 10px #16162D', padding: 10, marginTop: 20, marginLeft: 130, marginBottom: 10, height: 330, width:1200 }}>
                <TaskBar />
                </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={{ border: '1px solid black', boxShadow: '10px 10px #16162D', padding: 10, marginTop: 5, marginBottom: 15, marginLeft: 130, height: 1100, width: 1200 }}>
                <EventDashboard />
                </Paper>
                </Grid>
            </Grid>
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