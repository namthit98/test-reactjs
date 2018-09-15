import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };
  }

  renderLevel(level) {
    if (level === 0) {
      return <span className={"badge badge-pill badge-success"}>Small</span>;
    } else if (level === 1) {
      return <span className={"badge badge-pill badge-warning"}>Medium</span>;
    } else if (level === 2) {
      return <span className={"badge badge-pill badge-danger"}>Hard</span>;
    }

    return null;
  }

  handleEdit = () => {
    this.props.editItem();

    this.setState({ editMode: true });
  };

  handleViewMode = () => {
    this.setState({ editMode: false });
  }

  handleConfirm = () => {
    this.props.confirm();
    
    this.setState({ editMode: false });
  }

  render() {
    const taskInfo = this.props.info;

    const { name, level } = taskInfo;

    return (
      <tr>
        <th scope="row">{this.props.stt}</th>
        <td>
          {this.state.editMode ? (
            <input type="text" className="form-control" name="name" onChange={this.props.changed} value={this.props.editTarget.name} />
          ) : (
            name
          )}
        </td>
        <td>
          {this.state.editMode ? (
            <select name="level" className="form-control" onChange={this.props.changed} value={this.props.editTarget.level}>
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
            </select>
          ) : (
            this.renderLevel(level)
          )}
        </td>
        <td>
          {this.state.editMode ? null : (
            <button
              type="button"
              onClick={this.handleEdit}
              className="btn btn-warning"
            >
              Edit
            </button>
          )}

          {this.state.editMode ? null : (
            <button
              type="button"
              onClick={this.props.deleteItem}
              className="btn btn-danger"
            >
              Delete
            </button>
          )}

          {this.state.editMode ? (
            <React.Fragment>
              <button className="btn btn-success ml-3" onClick={this.handleConfirm}>Confirm</button>
              <button className="btn btn-info" onClick={this.handleViewMode}>Cancel</button>
            </React.Fragment>
          ) : null}
        </td>
      </tr>
    );
  }
}

export default Item;
