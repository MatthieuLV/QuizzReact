import React, { Component } from "react";
import Quiz from "./Quiz";

class User extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

  render() {
    return(

        <div class="card">
            <input placeholder="Veuillez saisir un pseudo pour participer au quizz" class="pseudo" value={this.state.value} onChange={this.handleChange}></input>
            <Quiz id={ this.props.id } value={this.state.value} />
        </div>
    )
  }
}

export default User;