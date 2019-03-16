import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

class Header extends Component {
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" align='righ'>
            Tech Test - Frontend
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
export default Header;
