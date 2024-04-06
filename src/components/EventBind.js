import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    {
      /* this is the better method */
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ message: "Goodbye" });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
