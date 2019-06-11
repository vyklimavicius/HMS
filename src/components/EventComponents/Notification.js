import React from 'react';
import { connect } from 'react-redux';
import { handleNotificationBoolean } from '../../Actions/index';
import Notify from './Notify';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';


const Notification = (props) => {

    const useStyles = makeStyles({
        card: {
            width: 300,
            padding: 1,
            textAlign: 'center',
            marginBottom: 2
        }
    })

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography>
            <h2>NOTIFICATION CENTER</h2>
            </Typography>
            {props.clicked ? <Notify /> : null}
        <CardActions>
         <button onClick={() => props.handleNotificationBoolean(props.clicked)}>Notify</button>
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