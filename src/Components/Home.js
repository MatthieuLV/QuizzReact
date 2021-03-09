import React, { Component } from "react";
import User from "./User";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            question: [],
        }
    } 
 
    async componentDidMount(){
        const reponse = await fetch('http://localhost:3001/quiz');
        const data = await reponse.json();
        this.setState({
            question: data
            
        })
    }

  render() {
    return(
        <div>
            <h1>Liste des quizz</h1>
            { this.state.question.map(ques =>
                <div key={ ques.id } className="card"> 
                    <h2> { ques.nom }</h2> 
                    <User id={ ques.id } />
                </div>
            )}
        </div>
    )
  }
}

export default Home;