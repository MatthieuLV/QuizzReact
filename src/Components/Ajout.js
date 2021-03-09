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
        <div class="card">
            <h1>Ajouter une question</h1>
            <input placeholder="Intitulé de la question" class="new-question" id="value"></input>
            <input placeholder="Réponse 1" class="option" id="choix1"></input>
            <input placeholder="Réponse 2" class="option" id="choix2"></input>
            <input placeholder="Réponse 3" class="option" id="choix3"></input>
            <input placeholder="Réponse 4" class="option" id="choix4"></input>
            <input placeholder="Bonne réponse" class="option" id="reponse"></input>
            <button class="submit-quiz" onClick={() => this.valid()}>Valider</button>
        </div>
    );
  }
}

export default Ajout;