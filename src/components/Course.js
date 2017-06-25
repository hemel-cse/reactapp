import React, { Component } from 'react';
import Menu from './Mainmenu';
import './Components.css';


class Course extends Component {
    render() {
        return (
            <div>
                    <Menu/>
                <div className="content">
                    <h1>This is Course</h1>
                </div>
            </div>
        );
    }
}

export default Course;
