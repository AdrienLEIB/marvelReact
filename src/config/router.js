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
import PrivateRoute from '../component/utils/privateRoute'
import HeaderLogout from '../component/headerLogout'

const Routes = () => {
    return(
        <Router>
            <HeaderLogout/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <PrivateRoute path="/home" component={Home}/>
                <Route path="/characters" component={Characters}/>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;