import React, { Component } from 'react';
import './Components.css';
import Mainmenu from './Mainmenu';
import Background from '../Images/1.jpg';


class Home extends Component {
  render() {
  	var divimg = {
        backgroundImage: 'url(' + Background + ')',
    };
    return (
      <div style={divimg} className="coverImg">
          <Mainmenu />
      </div>    
     );
  }
}

export default Home;
