import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { asyncComponent } from "react-async-component";
import Header from "./Header";
import TaskList from "./TaskList";

class SidePanelApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [
        { name: "Task 1", time: "2h", position: { x: 0, y: 0 }, id: 1 },
        { name: "Task 2", time: "3h", position: { x: 0, y: 0 }, id: 2 },
        { name: "Task 3", time: "1h", position: { x: 0, y: 0 }, id: 3 },
        { name: "Task 4", time: "4h", position: { x: 0, y: 0 }, id: 4 },
      ],
      removeTask: (task) => {
        const nextData = this.state.taskData.filter((t) => t.id !== task.id);
        console.log(task, nextData);
        this.setState({ taskData: nextData });

        //TODO -> update scheduler with task info.
        //window.updateScheduler(task);
      },
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <TaskList
          taskData={this.state.taskData}
          updateTaskData={this.state.removeTask}
        />
      </Fragment>
    );
  }
}

render(<SidePanelApp />, document.getElementById("right-column"));
