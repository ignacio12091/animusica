import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MainView from './../views/MainView';
import UserSettings from './../views/UserSettings';
import Playlists from './../views/Playlists';
import NotFound from './../views/NotFound';
import Login from './../views/Login';
import Search from './../views/Search';
import Player from './../components/Global/Player';
import Register from './../views/Register';
import './styles.css';

const ReRoute = () => <Redirect exact from="/" to="/home/mostvisited" />

const routing = (
    <Router>
        <Player />
        <Switch>
            <Route path="/" component={ReRoute} exact />
            <Route path="/home/:id" component={MainView} exact />
            <Route path="/home/:id" component={MainView} exact />
            <Route path="/home/:id" component={MainView} exact />
            <Route path="/home" component={ReRoute} exact />
            <Route path="/playlists" component={Playlists} />
            <Route path="/settings" component={UserSettings} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default routing;
