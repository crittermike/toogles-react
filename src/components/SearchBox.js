import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search YouTube" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default SearchBox;