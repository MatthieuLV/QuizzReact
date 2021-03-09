import React, { Component } from "react";
import axios from 'axios';
import uuid from 'react-uuid'

class Ajout extends Component {


  valid = () =>{

    const question = {
        id: uuid(),
        question: document.getElementById("value").value,
        choix: [
            document.getElementById("choix1").value,
            document.getElementById("choix2").value,
            document.getElementById("choix3").value,
            document.getElementById("choix4").value
          ],
          reponse: document.getElementById("reponse").value
    };

    axios({
        method: 'post',
        url: 'http://localhost:3001/question',
        data: question
    })
    .then(function (reponse) {
        console.log(reponse);
    })
    .catch(function (erreur) {
        console.log(erreur);
    });
}
  
  render() {
    
    return (
     
     <div>

        <label>Nom de la question</label>
        <input id="value"></input><br/>

        <label>Choix 1</label>
        <input id="choix1"></input><br/>

        <label>Choix 2</label>
        <input id="choix2"></input><br/>

        <label>Choix 3</label>
        <input id="choix3"></input><br/>

        <label>Choix 4</label>
        <input id="choix4"></input><br/>

        <label>Reponse</label>
        <input id="reponse"></input><br/>

        <button onClick={() => this.valid()}>Valider</button>

      </div>
      
    );
  }
}

export default Ajout;