import React, { Component } from "react";


class Answer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Clickcheck:true,
    }
  }

  onAnswer (data) {
    this.setState({
      Clickcheck:false
    })
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