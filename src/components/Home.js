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
      <div>
        <Menu />
        <div style={mainDivImg} className="coverImg">
            <div className="content">
                <h1>This is home</h1>
            </div>
        </div>
        </div>
     );
  }
}

export default Home;
