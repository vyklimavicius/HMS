import React from 'react';
import { connect } from 'react-redux';
import { handleStateChange } from '../../Actions/index';
import { handleAddNotification } from '../../Actions/index';
import Typography from '@material-ui/core/Typography';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


const Notify = (props) => {

    console.log(props);

    const handleChange = (e) => {
        console.log(e.target.name);
        
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
            <form onSubmit={handleSubmit}>
                <Typography>
                    Select Member:
                </Typography>
                <select name="memberName" onChange={handleChange}>
                {props.members.length > 0 ? props.members.map( mem => {
                        return (
                            <option value={mem.name}>{mem.name}</option>
                        )
                    }) : null}
                </select>
                <Typography>
                 Select Task:
                </Typography>
                <select name="task" onChange={handleChange}>
                    {props.tasks.length > 0 ? props.tasks.map(task => {
                        return (
                            <option value={task.name}>{task.name}</option>
                        )
                    }) : null}
                </select>
                <br></br>
                <br></br>
                {/* <input type="text" placeholder="Member Name" name="memberName" value={props.notiState.memberName} onChange={handleChange}></input> */}
                <input type="email" placeholder="Email" value={props.notiState.email} name="email"
                onChange={handleChange}></input>
                <input type="tel" placeholder="Phone Number" name="phoneNumber"
                    value={props.notiState.phoneNumber} onChange={handleChange}
                    ></input>
                <br></br>
                <textarea placeholder="Email message" name="emailMessage"
                value={props.notiState.emailMessage} onChange={handleChange}></textarea>
                <textarea placeholder="Text message" name="phoneMessage"
                value={props.notiState.phoneMessage} onChange={handleChange}></textarea>
                <input type="submit" value="send"></input>
            </form>
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



