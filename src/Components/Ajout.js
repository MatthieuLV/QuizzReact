import React, { Component } from "react";
import axios from 'axios';
import uuid from 'react-uuid';

class Ajout extends Component {

  valid = () =>{
    let quiz = {
        id: uuid(),
        nom: document.getElementById("name").value,
        question: [{
            id: uuid(),
            
            question: document.getElementById("value0").value,
            choix: [
                document.getElementById("choix10").value,
                document.getElementById("choix20").value,
                document.getElementById("choix30").value,
                document.getElementById("choix40").value
            ],
            reponse: document.getElementById("reponse0").value
        }],
    };

    for(let i=1;i<this.id;i++){
        let question2= {
            id: uuid(),
            
            question: document.getElementById("value"+i).value,
            choix: [
                document.getElementById("choix1"+i).value,
                document.getElementById("choix2"+i).value,
                document.getElementById("choix3"+i).value,
                document.getElementById("choix4"+i).value
            ],
            reponse: document.getElementById("reponse"+i).value
        }
        quiz.question.push(question2);
    }

    axios({
        method: 'post',
        url: 'http://localhost:3001/quiz',
        data: quiz
    })
    .then(function (reponse) {
        console.log(reponse);
    })
    .catch(function (erreur) {
        console.log(erreur);
    });
    document.location.href="/"; 
}

id = 1;
add = () =>{

    let div = document.createElement('div');
    div.id = this.id;
    document.getElementById("0").appendChild(div);

    let input1 = document.createElement('input');
    input1.placeholder = "Intitulé de la question";
    input1.className = "new-question";
    input1.id = "value"+this.id;
    div.appendChild(input1);

    let input2 = document.createElement('input');
    input2.placeholder = "Réponse 1";
    input2.className = "option";
    input2.id = "choix1"+this.id;
    div.appendChild(input2);

    let input3 = document.createElement('input');
    input3.placeholder = "Réponse 2";
    input3.className = "option";
    input3.id = "choix2"+this.id;
    div.appendChild(input3);

    let input4 = document.createElement('input');
    input4.placeholder = "Réponse 3";
    input4.className = "option";
    input4.id = "choix3"+this.id;
    div.appendChild(input4);

    let input5 = document.createElement('input');
    input5.placeholder = "Réponse 4";
    input5.className = "option";
    input5.id = "choix4"+this.id;
    div.appendChild(input5);

    let input6 = document.createElement('input');
    input6.placeholder = "Bonne réponse";
    input6.className = "option option2";
    input6.id = "reponse"+this.id;
    div.appendChild(input6);

    const lineBreak = document.createElement('br');
    div.appendChild(lineBreak);

    this.id=this.id+1;

}
  
  render() {
    
    return (
        <div class="card">
            <h1>Ajouter un Quiz</h1>
            <input placeholder="Intitulé du quiz" class="new-question" id="name"></input>

            <div id="main">
                <div id="0">
                    <input placeholder="Intitulé de la question" class="new-question" id="value0"></input>
                    <input placeholder="Réponse 1" class="option" id="choix10"></input>
                    <input placeholder="Réponse 2" class="option" id="choix20"></input>
                    <input placeholder="Réponse 3" class="option" id="choix30"></input>
                    <input placeholder="Réponse 4" class="option" id="choix40"></input>
                    <input placeholder="Bonne réponse" class="option option2" id="reponse0"></input>
                </div>
            </div>

            <button onClick={() => this.add()}>Ajouter une question</button>

            <button class="submit-quiz" onClick={() => this.valid()}>Valider</button>
        </div>
    );
  }
}

export default Ajout;