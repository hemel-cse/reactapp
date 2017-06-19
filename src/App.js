import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components.css';
import Menu from './Menu';
import Background from './Images/1.jpg';





class App extends Component {
  render() {
    var divimg = {
        backgroundImage: 'url(' + Background + ')',
    };
    return (
      <div style={divimg}>
          <div className="fixed-top">
            <div className="container">
              <div className="logo-menu">
                <a href="/" className="logo">NCC</a>
              </div>           
            </div>
          </div>
        <div className="body" >
        <Menu />
        </div>
      </div>
    );
  }
}

export default App;
