import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserProfile from './views/UserProfile';
import UserSettings from './views/UserSettings';
import MainView from './views/MainView';
import NotFound from './views/NotFound';

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={MainView} exact />
            <Route path="/profile" component={UserProfile} />
            <Route path="/settings" component={UserSettings} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
