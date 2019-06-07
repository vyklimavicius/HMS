import { combineReducers } from 'redux';

const loginReducer = {
    email: null,
    password: null,
    passwordConfirmation: null,
};

const signUpReducer = {
        username: null,
        name: null,
        lastname: null,
        email: null,
        password: null,
        image: null
};

const currentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}


const changesOfUserSignUp = (signUp = signUpReducer ,  action) => {
    switch(action.type){
        case 'USER_HANDLECHANGE':
        return Object.assign(signUp, action.payload)
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
                    alert(user.errors);
                } else {
               localStorage.setItem("user", JSON.stringify(user));
                window.location.href = '/dashboard';
                }
            })
        default:
         return signUp
    }
};

const changesUserLogin = (login = loginReducer ,action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return fetch("http://localhost:3000/v1/users", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: action.payload })
            }).then(window.location.href = '/login')
        case 'USERLOGIN_HANDLECHANGE':
            return Object.assign(login, action.payload)
        case 'USER_LOGIN':
            return Object.assign(login, action.payload)
        default:
         return login
        }
}

export default combineReducers({
    userLogin: changesUserLogin,
    currentUser: currentUser,
    changesInState: changesOfUserSignUp,
});

