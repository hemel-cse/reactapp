import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Benefits extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to Benefits</h2>
                    </div>
                </div>
        );
    }
}

export default Benefits;