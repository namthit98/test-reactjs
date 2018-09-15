import uuid from "uuid/v4";
import { orderBy as funcOrderBy, remove, reject } from "lodash";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowForm: false,
      strSearch: "",
      orderBy: "name",
      orderDir: "asc",
      name: "",
      level: 0,
      editTarget: null,
      tasks: null
    };
  }

  componentWillMount() {
    this.setState({
      tasks: localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")) : []
    })
  }

  toggleFormHandle = () => {
    const status = this.state.isShowForm;

    this.setState({ isShowForm: !status, name: "", level: 0 });
  };

  closeFormHandle = () => {
    this.setState({ isShowForm: false, name: "", level: 0 });
  };

  searchTaskHandle = str => {
    const value = str.toLowerCase();

    this.setState({ strSearch: value });
  };

  changeSortHandle = result => {
    this.setState({
      orderBy: result[0],
      orderDir: result[1]
    });
  };

  deleteItemHandle = idx => {
    const tasks = [...this.state.tasks];

    remove(tasks, task => task.id === idx);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.setState({ tasks: tasks });
  };

  handleSubmitForm = () => {
    const level = this.state.level;

    const newTask = {
      id: uuid(),
      name: this.state.name,
      level: parseInt(level, 10)
    };

    const tasks = [...this.state.tasks];

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.setState({ tasks: tasks });
  };

  changedHandle = e => {
    const target = e.target;

    let [name, value] = [target.name, target.value];

    this.setState({
      [name]: value
    });
  };

  handleEdit = idx => {
    const task = [...this.state.tasks].find(task => task.id === idx);

    this.setState({ editTarget: task });
  };

  handleChanged = e => {
    const target = e.target;

    let [name, value] = [target.name, target.value];

    const obj = { ...this.state.editTarget };

    value = name === "level" ? parseInt(value, 10) : value;

    obj[name] = value;

    this.setState({
      editTarget: obj
    });
  };

  handleConfirm = () => {
    const target = { ...this.state.editTarget };

    let tasks = [...this.state.tasks];

    tasks = reject(tasks, { id: target.id });

    const newTask = {
      id: target.id,
      name: target.name,
      level: target.level
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.setState({
      tasks: tasks,
      editTarget: null
    });
  };

  render() {
    let elForm;
    let tasks;
    let { orderBy, orderDir } = this.state;

    if (this.state.strSearch === "") {
      tasks = [...this.state.tasks];
    } else {
      const tasksOrigin = [...this.state.tasks];

      const result = tasksOrigin.filter(task =>
        task.name.toLowerCase().includes(this.state.strSearch)
      );

      tasks = [...result];
    }

    tasks = funcOrderBy(tasks, [orderBy], [orderDir]);

    this.state.isShowForm
      ? (elForm = (
          <Form
            clickedCancel={this.closeFormHandle}
            submitForm={this.handleSubmitForm}
            name={this.state.name}
            level={this.state.level}
            changed={this.changedHandle}
          />
        ))
      : (elForm = null);

    return (
      <div>
        <Header />

        <Control
          clickedBtn={this.toggleFormHandle}
          isShowForm={this.state.isShowForm}
          searchTask={str => this.searchTaskHandle(str)}
          changeSort={result => this.changeSortHandle(result)}
        />

        <br />

        {elForm}

        <br />

        <List
          tasks={tasks}
          deleteItem={id => this.deleteItemHandle(id)}
          editItem={idx => this.handleEdit(idx)}
          changed={this.handleChanged}
          editTarget={this.state.editTarget}
          confirm={this.handleConfirm}
        />
      </div>
    );
  }
}

export default App;
