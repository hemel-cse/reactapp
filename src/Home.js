import React, { Component } from 'react';
import './Components.css';
import Mainmenu from './Mainmenu';
import Header from './Header';
import Background from './Images/1.jpg';


class Home extends Component {
  render() {
  	var divimg = {
        backgroundImage: 'url(' + Background + ')',
    };
    return (
      <div style={divimg} className="coverImg">
          <Header />
          <Mainmenu />
      </div>    
     );
  }
}

export default Home;
