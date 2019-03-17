import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Grid ,Button} from '@material-ui/core';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

class Header  extends Component {
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography variant="h6" color="inherit">
                Tech Test - Frontend
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit"> Tarea activa <WatchLaterOutlinedIcon/>{this.props.time}</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
export default Header;
