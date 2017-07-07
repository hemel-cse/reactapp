import React, { Component } from 'react';
import Menu from './Mainmenu';
import Header from './Header';
import Footer from './Footer';
import './Components.css';

import Bg from '../Images/2.jpg';

class Course extends Component {
    render() {
        let mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
        const title = "Professional Diploma in";
        const title2 = "GAME DEVELOPMENT";
        return (
            <div style={mainDivImg} className="coverImg">
                <header>
                    <Header/>
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
                    <div className="textcenter">
                        <p>button here</p>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Course;
