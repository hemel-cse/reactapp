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
                <Row between="xs">
                    <Col xs={4}>
                        <div className="logo">
                            <Link to='/'>
                                <img src={ logo } alt='app-logo' />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={4} />
                    <Col xs={4} />
                </Row>
            </Grid>
    );
  }
}

export default Header;