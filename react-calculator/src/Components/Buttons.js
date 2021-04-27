import React, { Component } from "react";
import Number from "./Number.js";
import Operation from "./Operation.js";

export class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      allClear: "AC",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { output, addToScreen, memory } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="Buttons">
        <div className="row-1 firstFourRows">
          <Operation addToScreen={addToScreen} value={this.state.allClear} />
          <Operation addToScreen={addToScreen} value="+/-" />
          <Operation addToScreen={addToScreen} value="%" />
          <Operation addToScreen={addToScreen} value="÷" />
        </div>
        <div className="row-2 firstFourRows">
          <Number addToScreen={addToScreen} value={7} />
          <Number addToScreen={addToScreen} value={8} />
          <Number addToScreen={addToScreen} value={9} />
          <Operation addToScreen={addToScreen} value="x" />
        </div>
        <div className="row-3 firstFourRows">
          <Number addToScreen={addToScreen} value={4} />
          <Number addToScreen={addToScreen} value={5} />
          <Number addToScreen={addToScreen} value={6} />
          <Operation addToScreen={addToScreen} value="-" />
        </div>
        <div className="row-4 firstFourRows">
          <Number addToScreen={addToScreen} value={1} />
          <Number addToScreen={addToScreen} value={2} />
          <Number addToScreen={addToScreen} value={3} />
          <Operation addToScreen={addToScreen} value="+" />
        </div>
        <div className="row-5">
          <Number addToScreen={addToScreen} value={0} />
          <Operation addToScreen={addToScreen} value="." />
          <Operation addToScreen={addToScreen} value="=" />
        </div>
      </form>
    );
  }
}

export default Buttons;
