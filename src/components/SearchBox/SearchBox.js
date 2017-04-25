import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="search__box">
        <label htmlFor="input">Search</label>
        <input name="search" />
      </div>
    );
  }
}

export default SearchBox;