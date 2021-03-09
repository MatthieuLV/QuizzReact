import React, { Component } from "react";
import Answer from "./Answer";
import axios from 'axios';
import uuid from 'react-uuid';

class Quiz extends Component{

    constructor(props) {
        super(props);
        this.state = {
            question: [],
        }
    } 
 
    async componentDidMount(){
        const reponse = await fetch('http://localhost:3001/quiz/'+this.props.id);
        const data = await reponse.json();
        this.setState({
            question: data.question
            
        })
    }

    handleScore = (scoreValue) => {
        this.setState({score: scoreValue}); 
    }

    save = () =>{
        const user = {
            id: uuid(),
            name: this.props.value,
            score: this.state.score
        };
        axios({
            method: 'post',
            url: 'http://localhost:3001/user',
            data: user
        })
        .then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            console.log(erreur);
        });
    }

  render() {
    return(
        <div>
            <h1>Répondre au quizz</h1>
            { this.state.question.map(ques =>
                <div key={ ques.id } className="card"> 
                    <h2> { ques.question }</h2> 
                    <Answer id={ ques.id } reponse={ ques.reponse } question={ ques.choix } onScore={this.handleScore} score={this.state.score} />
                </div>
            )}
            <button class="submit-quiz" onClick={() => this.save()}>Valider</button>

        </div>
    )
  }
}

export default Quiz;