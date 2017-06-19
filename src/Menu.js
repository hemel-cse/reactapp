import React, { Component } from 'react';
import "./Components.css";


class Menu extends Component {
  render() {
    return (   
    <div className="menu-wrap">
        <nav className="menu navbar">
          <div className="icon-list">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#video-area">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link" href="#portfolios">Our Works</a>
              </li>            
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>     
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#subscribe">Subscribe</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>      
    );
  }
}

export default Menu;