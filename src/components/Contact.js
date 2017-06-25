import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Contact extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to Contact</h2>
                    </div>
                </div>
        );
    }
}

export default Contact;