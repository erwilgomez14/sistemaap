import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Welcome from './welcome';
//import About from './components/About';
//import Login from './components/Login';
//import Register from './components/Register';

function Routes() {
  return (
    <Router>
        <Route exact path="/">
          <Welcome /> 
        </Route>
    </Router>
  );
}

export default Routes;
