import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md navbar-static-top">
              <div className="navbar-header">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Toogles</a>
              </div>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Category 1</a>
                      <a className="dropdown-item" href="#">Category 2</a>
                      <a className="dropdown-item" href="#">Category 3</a>
                    </div>
                  </li>
                </ul>
                <SearchBox />
              </div>
            </nav>
        );
    }
}

export default Navigation;