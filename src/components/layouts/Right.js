import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid, Paper} from '@material-ui/core/';

import TasksViewer from './TasksViewer'
import FTasksViewer from './FTasksViewer'

const style = {
  Paper: {paddingTop : 5}
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
      <div >
        <Grid container>
          <AppBar position="static" color="default">
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
              <Tab label="Tareas pendientes" />
              <Tab label="Tareas terminadas" />
            </Tabs>
          </AppBar>
          <Grid item xs={12}>
            <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>

              <Paper style={style.Paper}>
                <TasksViewer/>
              </Paper>

              <Paper style={style.Paper}>
                <FTasksViewer/>
              </Paper>

            </SwipeableViews>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Right;
