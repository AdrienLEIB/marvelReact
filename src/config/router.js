import React, {useState} from "react";
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
// import Home from '../screens/home';
import PrivateRoute from '../component/utils/privateRoute';
import Header from '../component/header';
import Character from '../screens/character';
import Favorites from '../component/favorites';
import GlobalRecherche from '../screens/globalrecherche';

const Routes = () => {
    const [isToken, setIsToken] = useState("")
    return(
        <Router>
            <Header isToken={isToken} setIsToken={setIsToken} />
            <Switch>
                <Route exact path="/" component={props => <Login setIsToken={setIsToken} {...props} /> }/>
                {/* <PrivateRoute path="/characters" component={Home}/> */}
                <PrivateRoute exact path="/characters" component={Characters}/>
                <PrivateRoute  path="/characters/:id" component={Character}/>
                <PrivateRoute path='/favorites' component={Favorites} />
                <PrivateRoute path='/search=:name' component={GlobalRecherche} />
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;