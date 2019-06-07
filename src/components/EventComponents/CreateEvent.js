import React from 'react';

const CreateEvent = () => {
    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={null}>
                <input type="url" placeholder="https://example.com" name="image" onChange={null}></input>
                <input type="text" placeholder="name" value={null} name="name" onChange={null}></input>
                <input type="text" placeholder="description" value={null} name="description" onChange={null}></input>
                <input type="submit" value="Create"></input>
            </form>
            <button onClick={null}>Not today!</button>
        </div>
    );
}

export default CreateEvent;
