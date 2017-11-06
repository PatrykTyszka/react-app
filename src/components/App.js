import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './HomePage.js';
import SignUp from './SignUp.js';

import '../css/sidebar.css';

const Links = (props) => {
    return(
        <div className='sidebar-content'>
            <div className='sidebar--ul'>
                <NavLink exact activeClassName='active' className="sidebar-el" to="/">Home</NavLink>
                <NavLink activeClassName='active' className="sidebar-el" to="/sign-up">Sign Up</NavLink>
            </div>
        </div>
    )
}

const Routes = (props) => {
    return(
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path='/sign-up' component={SignUp}/>
        </div>
    )
}

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Links />
                    <Routes />
                </div>
            </Router>
        )
    }
}

export default App;
  
