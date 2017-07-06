import React, { Component } from 'react'
import './Components.css';
import Header from './Header';
import Footer from './Footer'
import Menu from './Mainmenu';
import Bg from '../Images/1.jpg';


class Home extends Component {
  render() {
      var mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
    return (
      <div style={mainDivImg} className="coverImg">
        <Header/>
        <Menu />
        <div>
            <div className="content">
                <h1>This is home</h1>
            </div>
        </div>
          <Footer/>
        </div>
     );
  }
}

export default Home;
