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

  //--// Create task form change
export const taskChange = (task) => {    
    return {
        type: 'HANDLETASK_CHANGE',
        payload: task
    }
}
  //--//

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = () => {
    return {
        type: 'DELETE_TASK'
    }
}

