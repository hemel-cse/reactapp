import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

import "./Components.css";

class Mainmenu extends Component {
  render() {
    return (
            <div className="menu-wrap">
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
            </div>
    );
  }
}

export default Mainmenu;