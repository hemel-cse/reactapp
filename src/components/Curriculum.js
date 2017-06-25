import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Curriculum extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to Curriculum</h2>
                    </div>
                </div>
        );
    }
}

export default Curriculum;