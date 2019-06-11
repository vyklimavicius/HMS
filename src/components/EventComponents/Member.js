import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Member = (props) => {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
            backgroundColor: '#16162D',
            color: 'white'
        },
        input: {
            display: 'none',
        },
    }));

    const classes = useStyles();

    return (
        <Button variant="contained" size="large" className={classes.button}>
            {props.member.name}
        </Button>
    );
};





export default Member;
