import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Main components
import Login from './components/MainComponents/Login';
import Dashboard from './components/MainComponents/Dashboard';
import SignUp from './components/MainComponents/SignUp';


const App = () => {
    return(
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

