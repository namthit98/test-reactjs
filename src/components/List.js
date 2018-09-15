import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const tasks = this.props.tasks;

    const elTasks = tasks.map((el, idx) => (
      <Item
        key={el.id}
        info={el}
        stt={idx + 1}
        deleteItem={() => this.props.deleteItem(el.id)}
        editItem={() => this.props.editItem(el.id)}
        changed={this.props.changed}
        editTarget={this.props.editTarget}
        confirm={this.props.confirm}
      />
    ));

    return (
      <div className="container-fluid">
        <div className="card">
          <h4 className="card-header text-white bg-info">List Task</h4>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{elTasks}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
