import React, { Component } from "react";
import Task from "./Task";

export default class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.taskData.map((taskItemData) => {
          return (
            <Task
              task={taskItemData}
              x={taskItemData.position.x}
              y={taskItemData.position.y}
              update={this.props.updateTaskData}
              id={taskItemData.id}
            />
          );
        })}
      </div>
    );
  }
}
