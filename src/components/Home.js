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
      var mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
    return (
      <div style={mainDivImg} className="coverImg">
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
                          <h1>This is home you know it</h1>
                      </div>
                  </div>
              </content>
              <aside>

              </aside>
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
     );
  }
}

export default Home;
