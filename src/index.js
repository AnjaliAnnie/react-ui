import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Contacts from './contacts';
import Users from './users';
import Notfound from'./notfound';
import table from './components/table';
import PrimarySearchAppBar from './components/Header';


const routing = (
    <div>
    <PrimarySearchAppBar/>
    <Router>
        <div>
            <ul>
                <li>
                   <Link to= "/">Home</Link> 
                </li>
                <li>
                   <Link to= "/users">Users</Link> 
                </li>
                <li>
                   <Link to= "/contacts">Contacts</Link> 
                </li>
                <li>
                   <Link to= "/table">Table</Link> 
                </li>
            </ul>

            {/* for routing  switch for component paths */}
            <Switch>
            <Route exact path = "/" component= {App}/>
            <Route path = "/users" component= {Users}/>
            <Route path = "/contacts" component= {Contacts}/>
            <Route path = "/table" component= {table}/>
            <Route  component= {Notfound}/>
            </Switch>
            
        </div>
    </Router>
    </div>
)
ReactDOM.render( routing , document.getElementById('root'));
// ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
