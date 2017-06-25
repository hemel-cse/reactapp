import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Introduction extends Component {
    render() {
        return (
                <div>
                    <Menu/>
                    <div className="content">
                        <h2>Welcome to introduction</h2>
                    </div>
                </div>
        );
    }
}

export default Introduction;