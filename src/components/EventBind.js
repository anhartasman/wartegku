import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({ message: "Goodbye" });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* this also will cause the component to re render, not recommended */}
        <button onClick={() => this.clickHandler()}>click</button>
      </div>
    );
  }
}

export default EventBind;
