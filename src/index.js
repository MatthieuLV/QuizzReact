import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Ajout from "./Components/Ajout";
import User from "./Components/User";

function App() {
  return (

    <Fragment>
      
        <User />
        <Ajout />
      
    </Fragment> 

  )
}

const rootElement = document.getElementById("root");
// reader method for react 
ReactDOM.render(<App />, rootElement);