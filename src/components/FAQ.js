import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class FAQ extends Component {
    render() {
        return (
              <div>
                  <Menu/>
                  <div className="content">
                      <h2>Welcome to FAQ</h2>
                  </div>
              </div>
        );
    }
}

export default FAQ;