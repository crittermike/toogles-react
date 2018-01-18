import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="searchbox">
                <form className="form-inline">
                    <input type="text" className="border-0 rounded-0 form-control" placeholder="Search YouTube" />
                    <button type="submit" className="border-0 rounded-0 btn btn-primary">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;