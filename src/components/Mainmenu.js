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
              <div className="logo">
                  <Link to='/'>
                      <img src={ logo } alt='app-logo' />
                  </Link>
              </div>

              <nav>
                  <div className="menu-list">
                    <ul>
                      <li>
                          <NavLink to='/course'>Course</NavLink>
                      </li>
                      <li>
                          <NavLink to='/introduction'>Introduction</NavLink>
                      </li>
                      <li>
                          <NavLink to='/curriculum'>Curriculum</NavLink>
                      </li>
                      <li>
                          <NavLink to='/benefits'>Benefits</NavLink>
                      </li>
                      <li>
                          <NavLink to='/trainers'>Trainers</NavLink>
                      </li>
                      <li>
                          <NavLink to='/lab'>Lab</NavLink>
                      </li>
                      <li>
                          <NavLink to='/admission'>Admission</NavLink>
                      </li>
                      <li>
                          <NavLink to='/faq'>FAQ</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
                
                <nav className="navbar-bottom">
                    <div className="menu-list">
                        <ul>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
  }
}

export default Mainmenu;