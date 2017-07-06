import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
                <nav className="navbar-bottom">
                    <div className="menu-list">
                        <ul>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Footer;
