
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid"; // UUID გენერატორი

class ToDoApp extends Component {
  state = {
    newTask: "",
    tasks: {
      todo: [],
      done: [],
    },
  };

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim()) {
      const newTaskObj = { id: uuidv4(), text: newTask };
      this.setState({
        tasks: {
          ...tasks,
          todo: [...tasks.todo, newTaskObj],
        },
        newTask: "",
      });
    }
  };

  markAsDone = (id) => {
    const { tasks } = this.state;
    const taskToMove = tasks.todo.find((task) => task.id === id);
    this.setState({
      tasks: {
        todo: tasks.todo.filter((task) => task.id !== id),
        done: [...tasks.done, taskToMove],
      },
    });
  };

  moveToToDo = (id) => {
    const { tasks } = this.state;
    const taskToMove = tasks.done.find((task) => task.id === id);
    this.setState({
      tasks: {
        done: tasks.done.filter((task) => task.id !== id),
        todo: [...tasks.todo, taskToMove],
      },
    });
  };

  deleteTask = (id) => {
    const { tasks } = this.state;
    this.setState({
      tasks: {
        ...tasks,
        done: tasks.done.filter((task) => task.id !== id),
      },
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <div className="columns">
          <div className="column">
            <h2>To Do</h2>
            <ul>
              {tasks.todo.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <button onClick={() => this.markAsDone(task.id)}>Done</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>Done</h2>
            <ul>
              {tasks.done.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <button onClick={() => this.moveToToDo(task.id)}>Move Back</button>
                  <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
