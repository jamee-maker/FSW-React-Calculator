import React, { Component } from "react";

export class Screen extends Component {
  render() {
    const { screenOutput } = this.props;
    let num = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let symbols = ["$", "."];
    let filter = num
      .format(screenOutput.join(""))
      .split("")
      .filter((elem) => {
        return !symbols.includes(elem);
      });
    if (filter[filter.length - 1] === "0") {
      filter.splice(-2, filter.length);
    }
    return (
      <div className="Screen">
        <h2>
          {/* <span>{"-"}</span> */}
          {filter}
        </h2>
      </div>
    );
  }
}

export default Screen;
