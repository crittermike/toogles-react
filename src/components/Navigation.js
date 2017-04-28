import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="collapse navbar-collapse">
          <SearchBox />
        </div>
      </nav>
    );
  }
}

export default Navigation;