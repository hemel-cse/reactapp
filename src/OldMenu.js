import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import "./Components.css";

const style = {

  display: 'inline-block',
  margin: '16px 32px 16px 0',
};


class OldMenu extends Component {
  render() {
    return (
    <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
        <MenuItem primaryText="Contact" />
      </Menu>
    </Paper>
    </div>   
    );
  }
}

export default OldMenu;