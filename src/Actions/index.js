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

export const handleBoolChange = (bool) => {
    let boolean = bool.clicked;
    return {
        type: 'CHANGE_STATE',
        payload: {clicked: !boolean}
    }
};

  //--// Create task form change
export const taskChange = (task) => {    
    return {
        type: 'HANDLETASK_CHANGE',
        payload: task
    }
};
  //--//

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
};

export const deleteTask = () => {
    return {
        type: 'DELETE_TASK'
    }
};

// Event actions

export const handleEventChange = (bool) => {
    let boolean = bool.clickedEvent;
    return {
        type: 'CHANGEEVENT_STATE',
        payload: { clickedEvent: !boolean }
    }
};

//--// Create event form change
export const eventChange = (event) => {
    return {
        type: 'HANDLEEVENT_CHANGE',
        payload: event
    }
};
  //--//

export const addEvent = (event) => {
    return {
        type: 'ADD_EVENT',
        payload: event
    }
};

export const deleteEvent = () => {
    return {
        type: 'DELETE_EVENT'
    }
};

// Members action 

export const handleMemberChange = (bool) => {
    return {
        type: 'CHANGEMEMBER_STATE',
        payload: { clickedMember: !bool }
    }
};

export const addMember = (member) => {
    return {
        type: 'ADD_MEMBER',
        payload: member
    }
};

export const memberChange = (member) => {
    return {
        type: 'HANDLEMEMBER_CHANGE',
        payload: member
    }
};

// Notification 

export const handleNotificationBoolean = (bool) => {
    // debugger
    return {
        type: 'CHANGENOTIFY_BOOL',
        payload: { clicked: !bool }
    }
};

export const handleStateChange = (notify) => {
    return {
        type: 'CHANGENOTIFY_STATE',
        payload: notify
    }
};

export const handleAddNotification = (notification) => {
    return {
        type: 'ADD_NOTIFICATION',
        payload: notification
    }
}