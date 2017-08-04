import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Footer extends Component {
    render() {
        return (
            <div >
                <nav className="navbar-bottom">
                    <div className="menu-list">
                        <ul>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Footer;
