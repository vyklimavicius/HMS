import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './Reducers/index';
// Main components
import Login from './components/MainComponents/Login';
import Dashboard from './components/MainComponents/Dashboard';
import SignUp from './components/MainComponents/SignUp';


const App = () => {
    
    return(
        <Provider store={createStore(Reducers)}>
         <Router>
           <Route path="/login" component={Login}/>
           <Route path="/dashboard" component={Dashboard} />
           <Route path="/signup" component={SignUp} />
         </Router>
        </Provider >
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

