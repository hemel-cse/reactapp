import React, { Component } from 'react';
import './Components.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Mainmenu';
import Apply from './ApplyButton';
import Bg from '../Images/1.jpg';


class Home extends Component {
  render() {
      let mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
      const title = "Professional Diploma in";
      const title2 = "GAME DEVELOPMENT";
    return (
      <div style={mainDivImg} className="coverImg">
               <header>
                   <Header button={<Apply/>} />
               </header>
                          <Menu/>
                          <div className="content">
                              <div className="homeTitle">
                                  <div className="homeTitleContent">
                                  <div className="homeTitleText">
                                      <h1>{title} <span>{title2}</span></h1>
                                  </div>
                                  </div>
                              </div>
                              <div className="home-button">
                                  <Apply/>
                              </div>
                          </div>
                  <footer>
                      <Footer item={<Apply/>}/>
                  </footer>
        </div>
     );
  }
}

export default Home;
