import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './header.css';

class Header extends Component {
  render() {
    return <header>
      <h1 className="logo">Sample App</h1>
      <Nav/>
    </header>;
  }
}

export default Header;
