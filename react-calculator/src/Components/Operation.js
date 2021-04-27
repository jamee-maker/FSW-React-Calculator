import React, { Component } from "react";

export class Operation extends Component {
  render() {
    const { value, addToScreen } = this.props;
    return (
      <div className="Operation">
        <button onClick={() => addToScreen(value)}>
          <h2>{value}</h2>
        </button>
      </div>
    );
  }
}

export default Operation;
