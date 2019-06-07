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

