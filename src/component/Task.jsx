import React, { PureComponent } from "react";

class Task extends PureComponent {
  componentDidMount() {
    console.log(`Task "${this.props.task.text}" mounted.`);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.task !== this.props.task) {
      console.log(`Task "${this.props.task.text}" updated.`);
    }
  }

  componentWillUnmount() {
    console.log(`Task "${this.props.task.text}" unmounted.`);
  }

  render() {
    const {
      task,
      onPrimaryAction,
      primaryActionLabel,
      onSecondaryAction,
      secondaryActionLabel,
    } = this.props;

    return (
      <li>
        {task.text}
        <button onClick={() => onPrimaryAction(task.id)}>{primaryActionLabel}</button>
        {onSecondaryAction && (
          <button onClick={() => onSecondaryAction(task.id)}>{secondaryActionLabel}</button>
        )}
      </li>
    );
  }
}

export default Task;
