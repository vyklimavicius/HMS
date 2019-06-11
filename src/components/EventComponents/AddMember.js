import React from 'react';
import { connect } from 'react-redux'; 
import { handleMemberChange, memberChange, addMember } from '../../Actions/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';


const AddMember = (props) => {
    
    const handleChange = (e) => {
        props.memberChange({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let nam = props.name;
        props.addMember({ name: nam});
    }

    return (
        <Card>
            <h3>Add a new Member</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="memberName" value={props.name} onChange={handleChange}></input>
                <input type="submit" value="add"></input>
            </form>
            <CardActions>
             <button onClick={() => props.handleMemberChange(props.clickedMember)}>No new members</button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.changesEventDashboard);
    
    return {
        name: state.changesEventDashboard.memberName,
        clickedMember: state.changesEventDashboard.clickedMember
    }
}

export default connect(mapStateToProps, {handleMemberChange, memberChange, addMember})(AddMember);
