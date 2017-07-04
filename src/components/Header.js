import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './Components.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
         <div className="fixed-top">
                <div className="logo">
                    <Link to='/'>
                        <img src={ logo } alt='app-logo' />
                    </Link>
                </div>
             <div className="header-middle">

             </div>
          </div>
    );
  }
}

export default Header;