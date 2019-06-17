import React from 'react';
import { connect } from 'react-redux';
import { handleNotificationBoolean } from '../../Actions/index';
import Notify from './Notify';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Notification = (props) => {

    const useStyles = makeStyles({
        card: {
            width: 300,
            padding: 1,
            textAlign: 'center',
            textDecorationColor: 'white',
            marginBottom: 2,
            backgroundColor: 'rgba(255,0,0,0.2)'
        }, button: {
            paddingLeft: 120,
        }
    })

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography>
            <img style={{marginTop: 5}} src="http://localhost:3000/notificationCenter.png" alt="notification"></img>
            {/* <h2>NOTIFICATION CENTER</h2> */}
            </Typography>
            {props.clicked ? <Notify /> : null}
         <CardActions className={classes.button}>
          <Button onClick={() => props.handleNotificationBoolean(props.clicked)}>Notify</Button>
         </CardActions>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        clicked: state.changesNotification.clicked
    }
}


export default connect(mapStateToProps, { handleNotificationBoolean })(Notification);