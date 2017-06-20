import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components.css';

class Header extends Component {
  render() {
    return (
         <div className="fixed-top">
            <div className="container">
              <div className="logo-menu">
                 <a className="logo" href="/">
                   <img src={ logo } alt='app-logo' />
                  </a>
              </div>           
            </div>
          </div>
    );
  }
}

export default Header;