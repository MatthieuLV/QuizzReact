import React, { Component } from "react";
import Answer from "./Answer";
import axios from 'axios';

class Quiz extends Component{

    constructor(props) {
        super(props);
        this.state = {
            question: [],
        }
    } 
 
    async componentDidMount(){
        const reponse = await fetch('http://localhost:3001/question');
        const data = await reponse.json();
        this.setState({
            question: data
            
        })
    }

    save = () =>{

        const user = {
            id: 2,
            name: this.props.value,
            score: 1
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
            { this.state.question.map(ques =>
                <div key={ ques.id } className="card"> 
                    <h2> { ques.question }</h2> 
                    <Answer id={ ques.id } reponse={ ques.reponse } question={ ques.choix } />
                </div>
                
            )}
            <button onClick={() => this.save()}>Valider</button>
        </div>
        
    )
  }
}

export default Quiz;