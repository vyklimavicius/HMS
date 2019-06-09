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

const taskbar = {
    tasks: [],
    name: null,
    description: null,
    clicked: false
};

const eventDashboard = {
    events: [],
    image: null,
    name: null,
    description: null,
    clickedEvent: false,
    clickedMember: false,
    memberName: null,
    members: []
};

const currentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
};


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

const changesTask = ( taskBar = taskbar, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return {...taskBar, ...action.payload}
        case 'HANDLETASK_CHANGE':
            return Object.assign(taskBar, action.payload)
        case 'ADD_TASK':
            return Object.assign(taskBar, {
                tasks: [...taskBar.tasks, action.payload]
            })
        case 'DELETE_TASK':
            taskBar.tasks.pop();
            return Object.assign(taskBar, {
                tasks: [...taskBar.tasks]
        }) 
        default:
         return taskBar
    }
}

const changesEvent = (event = eventDashboard, action) => {
    switch (action.type) {
        case 'CHANGEEVENT_STATE':
         return {...event, ...action.payload}
        case 'CHANGEMEMBER_STATE':
            return { ...event, ...action.payload }
        case 'HANDLEEVENT_CHANGE':
            return Object.assign(event, action.payload)
        case 'ADD_EVENT':
            return Object.assign(event, {
                events: [...event.events, action.payload]
            })
        case 'DELETE_EVENT':
            event.events.pop();
            return Object.assign(event, {
                events: [...event.events]
            })
        case 'HANDLEMEMBER_CHANGE':
            return Object.assign(event, action.payload)
        case 'ADD_MEMBER':
            return Object.assign(event, {
                members: [...event.members, action.payload]
            })
    default:
    return event
    }
};

export default combineReducers({
    userLogin: changesUserLogin,
    currentUser: currentUser,
    changesInState: changesOfUserSignUp,
    changesTask: changesTask,
    changesEventDashboard: changesEvent
});


