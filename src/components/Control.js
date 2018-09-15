import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {

  renderBtn = isShowForm => {
    if (isShowForm === true) {
      return (
        <button
          type="button"
          onClick={this.props.clickedBtn}
          className="btn btn-danger btn-block"
        >
          Close
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={this.props.clickedBtn}
          className="btn btn-primary btn-block"
        >
          Add Task
        </button>
      );
    }
  };

  render() {
    
    return (
      <div className="container-fluid">
        <div className="row">
          <Search searchTask={(str) => this.props.searchTask(str)}/>

          <Sort changeSort={(result) => this.props.changeSort(result)}/>

          <div className="col-md-6">
            {this.renderBtn(this.props.isShowForm)}
          </div>

          
        </div>
      </div>
    );
  }
}

export default Control;
