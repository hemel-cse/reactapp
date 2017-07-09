import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './Components.css';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
  render() {
    return (
        <Grid fluid>
        <Row center="xs">
            <Col xs={12} sm={4} md={4}>
                <div className="logo">
                    <Link to='/'>
                        <img src={ logo } alt='app-logo' />
                    </Link>
                </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
                <p className="text-center">mid</p>
            </Col>
            <Col xs={12} sm={4} md={4}>
                <div className="top-button text-center">
                    {this.props.button}
                </div>
            </Col>
        </Row>
        </Grid>
    );
  }
}

export default Header;