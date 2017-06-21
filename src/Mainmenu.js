import React, { Component } from 'react';
import logo from './logo.svg';
import "./Components.css";

class Mainmenu extends Component {
  render() {
    return (
    <div className="menu-wrap">
      <div className="logo-menu">
        <a className="logo" href="/">
          <img src={ logo } alt='app-logo' />
        </a>
      </div>
      <nav className="menu navbar">
          <div className="icon-list">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link"  href="/Course">Course</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/Introduction">Introduction</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="/Curriculum">Curriculum</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link" href="/Benefits">Benefits</a>
              </li>            
              <li className="nav-item">
                <a className="nav-link" href="/Trainers">Trainers</a>
              </li>     
              <li className="nav-item">
                <a className="nav-link" href="/Lab">Lab</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/Admission">Admission</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/FAQ">FAQ</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>  
    );
  }
}

export default Mainmenu;