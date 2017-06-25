import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Trainers extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to Trainers</h2>
                    </div>
                </div>
        );
    }
}

export default Trainers;