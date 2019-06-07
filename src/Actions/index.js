// Sign Up actions

export const getUserSignUp = (userData) => {
    return {
        type: 'CREATE_USER',
        payload: userData
    }
};

export const handleUserSignUp = (event) => {
    return {
        type: 'USER_HANDLECHANGE',
        payload: event
    }
};

// Login actions

export const getUserLogin = (userData) => {
    return {
        type: 'USER_AUTHO',
        payload: userData
    }
};


export const handleUserLogin = (event) => {
    return {
        type: 'USERLOGIN_HANDLECHANGE',
        payload: event
    }
};

// Taskbar actions 

export const handleChange = (bool) => {
    let boolean = bool.clicked;
    return {
        type: 'CHANGE_STATE',
        payload: {clicked: !boolean}
    }
}

export const taskChange = (task) => {
    // console.log(task);
    
    return {
        type: 'HANDLETASK_CHANGE',
        payload: task
    }
}

export const addTask = (task) => {
    // console.log(task);

    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = (task) => {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}

