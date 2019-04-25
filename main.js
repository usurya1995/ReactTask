import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './MainPage.js';

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home/:username" component={MainPage} />
      </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('rootUI'));
