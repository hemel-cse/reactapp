import React, { Component } from 'react'
import './Components.css';
import Header from './Header';
import {
    NavLink
} from 'react-router-dom';
import Menu from './Mainmenu';
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

      <div className="vbox viewport">
       <header>
           <Header/>
       </header>
          <section className="main hbox space-between">
              <nav>
                  <Menu/>
              </nav>
              <content>
                  <div className="content">
                      <div className="homeTitle">
                          <div className="homeTitleContent">
                          <div className="homeTitleText">
                              <h1>{title} <span>{title2}</span></h1>
                          </div>
                          </div>
                      </div>
                      <div>
                          <p>button here</p>
                      </div>
                  </div>
              </content>
          </section>
          <footer>
              <nav className="navbar-bottom">
                  <div className="menu-list">
                      <ul>
                          <li>
                              <NavLink to='/contact'>Contact</NavLink>
                          </li>
                      </ul>
                  </div>
              </nav>
          </footer>
         </div>
        </div>
     );
  }
}

export default Home;
