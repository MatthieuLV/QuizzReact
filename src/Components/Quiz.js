import React, { Component } from "react";
import Answer from "./Answer";

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

  render() {
    return(

        <div>
            { this.state.question.map(ques =>
                <div key={ ques.id } className="card"> 
                    <h2> { ques.question }</h2> 
                    <Answer id={ ques.id } reponse={ ques.reponse } question={ ques.choix } />
                </div>
            )}
        </div>
    )
  }
}

export default Quiz;