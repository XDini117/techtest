import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid, Paper} from '@material-ui/core/';

import TasksViewer from './TasksViewer'
import FTasksViewer from './FTasksViewer'

const style = {
  PaperR: {marginTop:8, marginBottom:8}
}

class Right extends React.Component {

  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
  this.setState({ value: index });
  };

  render() {
    return (
      <Grid item>
      <Grid item>
        <Paper style={style.PaperR}>
          <AppBar position='static'>
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor='secondary'
            variant='fullWidth'>
              <Tab label='Tareas pendientes' />
              <Tab label='Tareas terminadas' />
            </Tabs>
          </AppBar>
          </Paper>
        </Grid>
          <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
            <TasksViewer/>
            <FTasksViewer/>
          </SwipeableViews>
</Grid>
    );
  }
}

export default Right;
