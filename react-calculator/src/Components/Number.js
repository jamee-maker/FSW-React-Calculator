import React, { Component } from "react";

export class Number extends Component {
  render() {
    const { value, addToScreen } = this.props;
    return (
      <div className="Number">
        <button onClick={() => addToScreen(value)}>
          <h2>{value}</h2>
        </button>
      </div>
    );
  }
}

export default Number;
