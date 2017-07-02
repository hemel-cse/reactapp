import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';

import Bg from '../Images/2.jpg';

class Course extends Component {
    render() {
        var mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
        return (
            <div style={mainDivImg} className="coverImg">
                    <Menu/>
                <div className="content">
                    <h1>This is Course</h1>
                </div>
            </div>
        );
    }
}

export default Course;
