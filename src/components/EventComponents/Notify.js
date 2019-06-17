import React from 'react';
import { connect } from 'react-redux';
import { handleStateChange } from '../../Actions/index';
import { handleAddNotification } from '../../Actions/index';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Notify = (props) => {

    console.log(props);

    const useStyles = makeStyles(theme => ({
        textField: {
            marginLeft: -1.5,
            marginRight: -1.7,
            width: 150,
            backgroundColor: 'white'
        }, button: {
            paddingLeft: 20,
            width: 100
        }
    }
    ));

    const classes = useStyles();

    const [openM, setOpenM] = React.useState(false);
    const [openT, setOpenT] = React.useState(false);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function handleClose() {
        setOpenM(false);
    }

    function handleOpen() {
        setOpenM(true);
    }

    function handleCloseT() {
        setOpenT(false);
    }

    function handleOpenT() {
        setOpenT(true);
    }

    const handleChange = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
         
        props.handleStateChange({ [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let mem = props.notiState.memberName;
        let emailP = props.notiState.email;
        let emailM = props.notiState.emailMessage;
        let phoneN = props.notiState.phoneNumber;
        let phoneM = props.notiState.phoneMessage;
        let tas = props.notiState.task;
        props.handleAddNotification({ memberName: mem, task: tas, email: emailP, emailMessage: emailM, phoneNumber: phoneN, phoneMessage: phoneM })
    }
    
    return (
        <div>
            <h3>Notify Menu</h3>
            <Grid container>
            <form>
                <Grid item sm>
                 <Typography>
                    Select Member:
                 </Typography>
                    <Select
                        open={openM}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        onChange={handleChange}
                        MenuProps={MenuProps}
                        name="memberName"
                    >
                        {props.members.length > 0 ? props.members.map(mem => {
                            return (
                                <MenuItem value={mem.name}>
                                    {mem.name}
                                </MenuItem>)
                        }) : null}
                    </Select>
                </Grid>
                <Grid item sm>
                    <Typography>
                        Select Task:
                    </Typography>
                    <Select
                        open={openT}
                        onClose={handleCloseT}
                        onOpen={handleOpenT}
                        onChange={handleChange}
                        MenuProps={MenuProps}
                        name="task"
                    >
                        {props.tasks.length > 0 ? props.tasks.map(task => {
                            return (
                                <MenuItem value={task.name}>
                                    {task.name}
                                </MenuItem>
                            )
                        }) : null}
                    </Select>
                </Grid>
                <br></br>
                <InputLabel style={{marginLeft: -10, display: 'inline'}} htmlFor="component-simple">Member:</InputLabel>
                {props.notiState.memberName}
                <InputLabel style={{marginLeft: 30, display: 'inline'}} htmlFor="component-simple">Task:</InputLabel>
                {props.notiState.task}
                <br></br>
                <br></br>
                <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                value={props.notiState.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                {/* <input type="email" placeholder="Email" value={props.notiState.email} name="email"
                onChange={handleChange}></input> */}
                <TextField
                id="outlined-tel-input"
                label="Phone Number"
                className={classes.textField}
                type="tel"
                name="phoneNumber"
                value={props.notiState.phoneNumber}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                {/* <input type="tel" placeholder="Phone Number" name="phoneNumber"
                    value={props.notiState.phoneNumber} onChange={handleChange}
                    ></input> */}
                <br></br>
                <TextField
                id="outlined-text-input"
                label="Email Message"
                className={classes.textField}
                type="text"
                name="emailMessage"
                value={props.notiState.emailMessage}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-text-input"
                label="Text message"
                className={classes.textField}
                type="text"
                name="phoneMessage"
                value={props.notiState.phoneMessage}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                />
                {/* <textarea placeholder="Email message" name="emailMessage"
                value={props.notiState.emailMessage} onChange={handleChange}></textarea>
                <textarea placeholder="Text message" name="phoneMessage"
                value={props.notiState.phoneMessage} onChange={handleChange}></textarea> */}
                {/* <input type="submit" value="send"></input> */}
            <Button className={classes.button} variant="contained" color="secondary" onClick={handleSubmit}>Send</Button>
            </form>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        notiState: state.changesNotification,
        members: state.changesEventDashboard.members,
        tasks: state.changesTask.tasks
    }
}


export default connect(mapStateToProps, { handleStateChange, handleAddNotification })(Notify);



