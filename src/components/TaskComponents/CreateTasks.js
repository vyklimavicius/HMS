import React from 'react';
import { connect } from 'react-redux';
import { handleBoolChange, taskChange, addTask } from '../../Actions/index';

const CreateTasks = (props) => {

    // console.log(props);
    

    const handleChange = (e) => {
        props.taskChange({ [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let nam = props.name;
        let descr = props.description;
        props.addTask({name: nam, description: descr});
    };

    return (
        <div>
            <h1>Create task</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={props.name} name="name" onChange={handleChange}></input>
            <input type="text" placeholder="description" value={props.description} name="description" onChange={handleChange}></input>
            <input type="submit" value="Create"></input>
            </form>
            <button onClick={() => props.handleBoolChange(props.clicked)}>Never Mind!</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        clicked: state.changesTask
    }
}
export default connect(mapStateToProps, { handleBoolChange, taskChange, addTask })(CreateTasks);
