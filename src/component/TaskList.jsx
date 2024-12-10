
import React, { PureComponent } from "react";
import Task from "./Task";

class TaskList extends PureComponent {
  componentDidMount() {
    console.log(`${this.props.title} list mounted.`);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      console.log(`${this.props.title} list updated.`);
    }
  }

  componentWillUnmount() {
    console.log(`${this.props.title} list unmounted.`);
  }

  render() {
    const {
      title,
      tasks,
      onPrimaryAction,
      primaryActionLabel,
      onSecondaryAction,
      secondaryActionLabel,
    } = this.props;

    return (
      <div className="column">
        <h2>{title}</h2>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onPrimaryAction={onPrimaryAction}
              primaryActionLabel={primaryActionLabel}
              onSecondaryAction={onSecondaryAction}
              secondaryActionLabel={secondaryActionLabel}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
