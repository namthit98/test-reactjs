import React, { Component } from "react";

class Sort extends Component {

  changeSortHandle = (e) => {
    const result = e.target.value.split('-');
    
    this.props.changeSort(result);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-1">
          <span className="btn btn-success">
            Sort by
          </span>
        </div>

        <div className="col-md-2">
          <select className="form-control" onChange={this.changeSortHandle}>
            <option value="name-asc">Name - ASC</option>
            <option value="name-desc">Name - DESC</option>
            <option value="level-asc">Level - ASC</option>
            <option value="level-desc">Level - DESC</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Sort;
