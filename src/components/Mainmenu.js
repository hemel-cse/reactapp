import React, { Component } from 'react';
import {
    NavLink,
    Link
} from 'react-router-dom';

import logo from './logo.svg';
import "./Components.css";

class Mainmenu extends Component {
  render() {
    return (
            <div className="menu-wrap">
              <div className="logo-menu">
                  <Link className="logo" to='/'>
                      <img src={ logo } alt='app-logo' />
                  </Link>
              </div>
              <nav className="menu navbar">
                  <div className="icon-list">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <NavLink className="nav-link" to='/course'>Course</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link"  to='/introduction'>Introduction</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to='/curriculum'>Curriculum</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to='/benefits'>Benefits</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to='/trainers'>Trainers</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink  className="nav-link" to='/lab'>Lab</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link"  to='/admission'>Admission</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link"  to='/faq'>FAQ</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
                <nav className="menu">
                    <div className="icon-list">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
  }
}

export default Mainmenu;