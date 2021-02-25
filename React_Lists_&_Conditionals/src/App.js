import "./App.css";
import React, { Component } from "react";
import Validation from './ValidationComponent/Validation';
import CharComponent from './charComponent/charComponent';


export class App extends Component {
  state = {
    userInput: "",
  };

  userInputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharacterHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updateUserInput = text.join('');
    this.setState({userInput : updateUserInput});
  }

  render() {
    const style = {
      font: "inherit",
      backgroundColor: "white",
      border: "1px solid black",
      padding: "16px",
      borderRadius: "8px",
      margin: "15px",
    };

    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent 
                character = {ch}
                Key = {index}
                clicked = {() => this.deleteCharacterHandler(index)}
             />;
    });
    return (
      <div className="App">
        <input
          style={style}
          type="text"
          onChange = {this.userInputChangedHandler}
          //value = {this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputTextLength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
