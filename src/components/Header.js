import React, { Component } from 'react';
import './Components.css';

class Header extends Component {
  render() {
    return (
         <div className="fixed-top">
            <div className="container">
                <p>Header</p>
            </div>
          </div>
    );
  }
}

export default Header;