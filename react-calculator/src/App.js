import React, { Component } from "react";
import Screen from "./Components/Screen.js";
import Buttons from "./Components/Buttons.js";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tempMemory: [0],
      output: [0],
      memory: [],
      operation: [],
      allClear: "AC",
    };
  }

  addToScreen = (content) => {
    let values = ["÷", "%", "AC", "C", "x", "-", "+", "+/-", "=", "."];
    if (!isNaN(content)) {
      this.setState((prevState) => ({
        allClear: "C",
      }));
    }
    if (content === "AC" || content === "C") {
      this.setState((prevState) => ({
        output: [],
        tempMemory: [0],
        memory: [],
        operation: [],
        allClear: "AC",
      }));
      content = 0;
    }
    if (values.includes(content)) {
      if (content === "+/-") {
        this.setState((prevState) => ({
          output: [Number(this.state.output.join("")) * -1],
        }));
      }
      if (content === "=") {
        if (this.state.operation[0] === "+") {
          this.setState((prevState) => ({
            output: [this.addition()],
            memory: [],
            operation: [],
            tempMemory: [0],
          }));
        }
        if (this.state.operation[0] === "-") {
          this.setState((prevState) => ({
            output: [this.subtraction()],
            memory: [],
            operation: [],
            tempMemory: [0],
          }));
        }
        if (this.state.operation[0] === "x") {
          this.setState((prevState) => ({
            output: [this.multiplication()],
            memory: [],
            operation: [],
            tempMemory: [0],
          }));
        }
        if (this.state.operation[0] === "÷") {
          this.setState((prevState) => ({
            output: [this.division()],
            memory: [],
            operation: [],
            tempMemory: [0],
          }));
        }
      }
      if (
        this.state.operation.length === 0 &&
        content !== "=" &&
        content !== "+/-"
      ) {
        this.setState((prevState) => ({
          tempMemory: [0],
          memory: [...prevState.output],
          operation: [...prevState.operation, content],
        }));
      }
    } else if (this.state.tempMemory[0] === 0) {
      this.setState((prevState) => ({
        output: [content],
        tempMemory: [content],
      }));
    } else {
      this.setState((prevState) => ({
        output: [...prevState.output, content],
      }));
    }
  };

  addition = () => {
    let num = Number(this.state.output.join(""));
    let num2 = Number(this.state.memory.join(""));
    return num + num2;
  };

  subtraction = () => {
    let num = Number(this.state.output.join(""));
    let num2 = Number(this.state.memory.join(""));
    return num2 - num;
  };

  multiplication = () => {
    let num = Number(this.state.output.join(""));
    let num2 = Number(this.state.memory.join(""));
    return num * num2;
  };

  division = () => {
    let num = Number(this.state.output.join(""));
    let num2 = Number(this.state.memory.join(""));
    return (num2 / num).toFixed(0);
  };

  render() {
    console.log(Number(this.state.output.join("")));
    console.log(this.state.memory);
    console.log(this.state.operation);
    console.log(this.state.tempMemory);
    return (
      <div className="App">
        <Screen screenOutput={this.state.output} />
        <Buttons
          addToScreen={this.addToScreen}
          output={this.state.output}
          memory={this.state.memory}
          allClear={this.state.allClear}
        />
      </div>
    );
  }
}

export default App;
