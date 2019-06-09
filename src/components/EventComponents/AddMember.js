import React from 'react';
import { connect } from 'react-redux'; 
import { handleMemberChange, memberChange, addMember } from '../../Actions/index'

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
        <div>
            <h3>Add a new Member</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="memberName" value={props.name} onChange={handleChange}></input>
                <input type="submit" value="add"></input>
            </form>
            <button onClick={() => props.handleMemberChange(props.clickedMember)}>No new members</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.changesEventDashboard);
    
    return {
        name: state.changesEventDashboard.memberName,
        clickedMember: state.changesEventDashboard.clickedMember
    }
}

export default connect(mapStateToProps, {handleMemberChange, memberChange, addMember})(AddMember);
