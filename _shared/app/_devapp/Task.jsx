import React, { Component } from "react";
import Draggable from "react-draggable";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { position: { x: 0, y: 0 } };
  }

  onStop(event, data) {
    if (data.x < -50) {
      this.setState({ position: { x: data.x, y: data.y } });
      this.props.update(this.props);
    } else {
      this.setState({ position: { x: 0, y: 0 } });
    }
  }

  render() {
    const { name, time } = this.props.task;

    return (
      <Draggable
        onStop={(event, data) => this.onStop(event, data)}
        position={{ x: 0, y: 0 }}
      >
        <div className="task">
          <div>{name}</div>
          <div className="time-label">{time}</div>
        </div>
      </Draggable>
    );
  }
}
