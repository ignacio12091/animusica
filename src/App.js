import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MainView from './views/MainView';

function App() {
  return (
    <Router>
    <div>
      <MainView />
      {/*
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      */}
      <Route exact path="/" component={null} />
      <Route path="/profileconfig" component={null} />
    </div>
  </Router>
  );
}

export default App;
