import React, { Component } from "react";


class Answer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Clickcheck:true,
    }
  }

  score = 0;
  onAnswer (data) {
    if(this.props.score != undefined){
      this.score = this.props.score;
    }
    
    if(this.props.reponse == data){
      this.score = this.score + 1;
    }
    this.setState({
      Clickcheck:false
    })
    this.props.onScore(this.score);
  };

  render() {
    return (
     <div>
        { this.state.Clickcheck ? this.props.question.map(ans => {
          return <button onClick={() => this.onAnswer(ans)}>{ans}</button>;
        }) : <button class="response">La bonne réponse était {this.props.reponse}</button> }
      </div>
    );
  }
}

export default Answer;