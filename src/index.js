import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Quiz from "./Components/Quiz";

function App() {
  return (

    <Fragment>
        <Quiz />
      
    </Fragment> 

  )
}

const rootElement = document.getElementById("root");
// reader method for react 
ReactDOM.render(<App />, rootElement);