import React, { Component } from 'react'
import Menu from './Mainmenu';
import './Components.css';

import Bg from '../Images/1.jpg';


class Home extends Component {
  render() {
      var mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
    return (
        <div style={mainDivImg} className="coverImg">
                <Menu />
            <div className="content">
                <h1>This is home</h1>
            </div>
        </div>
     );
  }
}

export default Home;
