import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" />
          
          <div className="col-md-6">
            <form action="" className="form-inline">
              <div className="form-group">
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  value={this.props.name}
                  onChange={this.props.changed}
                />
              </div>
              <div className="form-group">
                <select name="level" className="form-control" onChange={this.props.changed}>
                  <option value="0">Small</option>
                  <option value="1">Medium</option>
                  <option value="2">Hard</option>
                </select>
              </div>
              <div className="form-group">
                <button type="button" onClick={this.props.submitForm} className="btn btn-primary">
                  Submit
                </button>
                <button type="button" onClick={this.props.clickedCancel} className="btn btn-default">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
