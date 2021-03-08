import React, { Component } from "react";

class Answer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Clickcheck:true,
      id:this.props.id,
      question: this.props.question,
      score: 0,
      reponse: this.props.reponse
    }
  }
 


  onAnswer (data) {
    if (this.state.reponse == data) { 
      this.setState({ 
        score: this.state.score +1
      }); 
    }
    this.setState({
      Clickcheck:false
    })
  };
  
  render() {
   
    return (
     
     <div>


        { this.state.Clickcheck ? this.state.question.map(ans => {
          return <button onClick={() => this.onAnswer(ans)}> {ans}</button>;
        }) : <button > {this.state.reponse}</button> }
        <p>{this.state.score}</p>
      </div>
    );
  }
}

export default Answer;