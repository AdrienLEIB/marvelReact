import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";


import Login from '../screens/login';
import Characters from '../screens/characters';
import Home from '../screens/home';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/characters" component={Characters}/>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;