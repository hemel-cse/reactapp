import React, { Component } from 'react';
import './Components.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Mainmenu';
import Apply from './ApplyButton';
import Bg from '../Images/1.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
  render() {
      const { width } = this.state;
      const isMobile = width <= 768;

      let mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
      const title = "Professional Diploma in";
      const title2 = "GAME DEVELOPMENT";
    return (
      <div style={mainDivImg} className="coverImg">
               <header>
                   <Header button={<Apply/>} isMobile={isMobile} />
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
