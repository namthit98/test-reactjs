import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strSearch : ''
    }
  }

  inputHandle = (e) => {
    this.setState({strSearch: e.target.value});
  }

  clearStrSearch = () => {
    this.props.searchTask('');

    this.setState({strSearch: ''});

  }

  render() {
    return (
      <div className="col-md-3">
        <form className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Search for ..."
              type="search"
              value={this.state.strSearch}
              onChange={(e) => this.inputHandle(e)}
            />
            <span>
              <button type="button" onClick={() => this.props.searchTask(this.state.strSearch)} className="btn btn-primary">Go!</button>
              <button type="button" onClick={this.clearStrSearch} className="btn btn-danger">Clear</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
