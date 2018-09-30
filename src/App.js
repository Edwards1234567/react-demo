import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
const App=()=>{
  return(
    <Router>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect path="/" to="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App;
