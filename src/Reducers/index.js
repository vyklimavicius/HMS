import { combineReducers } from 'redux';

const loginReducer = {
    email: null,
    password: null,
    passwordConfirmation: null,
    showPassword: false,
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
    members: [], 
};

const notify = {
    memberName: null,
    task: null,
    email: null,
    phoneNumber: null,
    emailMessage: null,
    phoneMessage: null,
    // notifications: [],
    clicked: false
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
            if (taskBar.tasks.length >= 10) {
                return taskBar
            } else {
                return Object.assign(taskBar, {
                    tasks: [...taskBar.tasks, action.payload]
                })
            }
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
            if (event.events.length >= 1) {
                return event
            } else {
                return Object.assign(event, {
                    events: [...event.events, action.payload]
                })
            }
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

const changesNotification = (notification = notify, action) => {
    switch (action.type) {
        case 'CHANGENOTIFY_BOOL':
            return { ...notification, ...action.payload }
        case 'CHANGENOTIFY_STATE':
            return { ...notification, ...action.payload }
        case 'ADD_NOTIFICATION':
            let templateParams = {
                to_name: `${action.payload.memberName}`,
                to_task: `${action.payload.task}`,
                message_html: `${action.payload.emailMessage}`,
                to_email: `${action.payload.email}`,
                from_name: 'HMS Team',
            };

            return window.emailjs.send('gmail', 'template_sBHNuR2i', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                }).then(
                    fetch("https://textbelt.com/text", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `phone=${action.payload.phoneNumber}&message=${action.payload.phoneMessage}&key=cba0e9828848fe4532b821f133138d9e8a06f0f2F6GD541TjhLBVVrKkue0hSeHr`
                    }).then(response => response.json())
                        .then(json => {
                            console.log(json);
                        })
                )
        default:
        return notification  
    };
};

export default combineReducers({
    userLogin: changesUserLogin,
    currentUser: currentUser,
    changesInState: changesOfUserSignUp,
    changesTask: changesTask,
    changesEventDashboard: changesEvent,
    changesNotification: changesNotification
});

