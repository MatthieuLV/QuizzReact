import React, { Component } from "react";

class Resultat extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    } 
 
    async componentDidMount(){
        const reponse = await fetch('http://localhost:3001/user');
        const data = await reponse.json();
        this.setState({
            user: data
            
        })
    }

  render() {
    return(
        <div>
            <h1>Résultat des utilisateurs</h1>
            { this.state.user.map(ques =>
                <div key={ ques.id } className="card"> 
                    <h2> { ques.name }</h2> 
                    <p>Score : { ques.score }</p>
                </div>
            )}
        </div>
    )
  }
}

export default Resultat;