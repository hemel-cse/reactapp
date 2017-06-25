import React from 'react';
import Menu from './Mainmenu';
import './Components.css';

const NotFound = ({location}) => {
    return (
        <div>
            <Menu/>
            <div className="content">
                <h2>The requested page is not found: {location.pathname}</h2>
                <h2>Check pages from menu items</h2>
            </div>
        </div>
    );
};

export default NotFound;