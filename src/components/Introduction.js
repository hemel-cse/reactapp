import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';
import Bg from '../Images/4.jpg';


class Introduction extends Component {
    render() {
        var mainDivImg = {
          backgroundImage: 'url(' + Bg + ')',
      };
        return (
                <div style={mainDivImg} className="coverImg">
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to introduction</h2>
                    </div>
                </div>
        );
    }
}

export default Introduction;