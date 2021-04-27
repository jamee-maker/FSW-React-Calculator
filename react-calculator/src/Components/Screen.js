import React, { Component } from "react";

export class Screen extends Component {
  render() {
    const { screenOutput } = this.props;
    return (
      <div className="Screen">
        <h2>{screenOutput}</h2>
      </div>
    );
  }
}

export default Screen;
