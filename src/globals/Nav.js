import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar">
        <div className="navbar__cont">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }
}

export default Nav;