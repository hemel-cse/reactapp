import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './Components.css';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
  render() {
    return (
        <div className="logo">
            <Link to='/'>
                <img src={ logo } alt='app-logo' />
            </Link>
        </div>
    );
  }
}

export default Header;