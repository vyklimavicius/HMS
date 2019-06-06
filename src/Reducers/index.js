import { combineReducers } from 'redux';

const loginReducer = () => {
    return {
        email: null,
        password: null,
        passwordConfirmation: null,
    }
};

const signUpReducer = () => {
    return {
        username: null,
        name: null,
        lastname: null,
        email: null,
        password: null,
        image: null
    }
}

const changesOfReducers = (userData = null, action) => {
    switch(action.type){
        case 'CREATE_USER':
        return fetch("http://localhost:3000/v1/users" , {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({user:action.payload})
        })
        case 'USER_AUTHO':
        return fetch('http://localhost:3000/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { autho: action.payload }
                )
            }).then( response => response.json())
            .then( user => {
                if (user.errors) {
                    alert(user.errors)
                } else {
               localStorage.setItem("user", JSON.stringify(user))
                window.location.href = '/dashboard'
                }
            })
        default:
         return userData
    }
};

export default combineReducers({
    userLogin: loginReducer,
    userSignUp: signUpReducer,
    changesInState: changesOfReducers
});

