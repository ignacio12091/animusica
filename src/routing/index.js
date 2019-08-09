import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainView from './../views/MainView';
import UserSettings from './../views/UserSettings';
import Playlists from './../views/Playlists';
import NotFound from './../views/NotFound';
import Login from './../views/Login';
import './styles.css';

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={MainView} exact />
            <Route path="/home" component={MainView} exact />
            <Route path="/playlists" component={Playlists} />
            <Route path="/settings" component={UserSettings} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default routing;
