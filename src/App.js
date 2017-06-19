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
      <div className="body" >
      <Menu />

      <div>
       <h1> Hi </h1>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
