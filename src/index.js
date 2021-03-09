import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./styles.css";
import Ajout from "./Components/Ajout";
import Home from "./Components/Home";
import Resultat from "./Components/Resultat";

function App() {

  return (

    <Router>

        <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/ajout'} className="nav-link">Ajout</Link></li>
            <li><Link to={'/resultat'} className="nav-link">Resultat</Link></li>
          </ul>

        <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/ajout'>
                <Ajout />
              </Route>

              <Route exact path='/resultat'>
                <Resultat />
              </Route>
          </Switch>
</Router>

  

  )
}

const rootElement = document.getElementById("root");
// reader method for react 
ReactDOM.render(<App />, rootElement);