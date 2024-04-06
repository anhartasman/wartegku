import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // event binding in constructor still the better
  }

  //   event binding with class property as arrow function
  clickHandler = () => {
    this.setState({ message: "Goodbye" });
  };

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
