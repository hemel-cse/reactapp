import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Admission extends Component {
    render() {
        return (
                <div>
                    <Menu />
                    <div className="content">
                        <h2>Welcome to Admission</h2>
                    </div>
                </div>
        );
    }
}

export default Admission;