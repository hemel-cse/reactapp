import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Lab extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to Lab</h2>
                    </div>
                </div>
        );
    }
}

export default Lab;