export const getUserSignUp = (userData) => {
    return {
        type: 'CREATE_USER',
        payload: userData
    }
};

export const getUserLogin = (userData) => {
    return {
        type: 'USER_AUTHO',
        payload: userData
    }
};

