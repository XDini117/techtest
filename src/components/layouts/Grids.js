import React, {Component} from 'react';
import {Grid, Paper, Divider, MenuList, MenuItem, Typography, ListItemIcon} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import Right from './Right';

const style = {
  Paper: {margin:10, padding: 10, paddingBottom: 2, paddingTop: 2 }
}

class Grids extends Component {

  state = {
    selected: 'icon1',
  };

  handleSelectItem = (event, active) => {
    this.setState({ selected: active});
  };

  render(){

    const { selected } = this.state;

    return(
      <Grid container>
        <Grid item xs={12} sm={3} md={3} lg={2} xl={2}>
          <Paper style={style.Paper}>
              <MenuList>
                <MenuItem selected = {selected === 'icon1'} onClick = {event => this.handleSelectItem(event, 'icon1')}>
                  <ListItemIcon><AssignmentIcon color = {selected === 'icon1' ? 'secondary' : 'default'}/></ListItemIcon>
                  <Typography variant='inherit' noWrap>Tareas</Typography>
                </MenuItem>
                <MenuItem selected = {selected === 'icon2'} onClick = {event => this.handleSelectItem(event, 'icon2')}>
                  <ListItemIcon><TrendingUpIcon color = {selected === 'icon2' ? 'secondary' : 'default'}/></ListItemIcon>
                  <Typography variant='inherit' noWrap>Gráfica</Typography>
                </MenuItem>
              </MenuList>
              <Divider/>
              <MenuList>
                <MenuItem selected = {selected === 'about'} onClick = {event => this.handleSelectItem(event, 'about')}>
                  <ListItemIcon ><ContactSupportIcon color = {selected === 'about' ? 'secondary' : 'default'}/></ListItemIcon>
                  <Typography variant='inherit' noWrap>About</Typography>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={10} xl={10}>
            <Paper style={style.Paper}>
              <Right/>
            </Paper>
          </Grid>
        </Grid>
    )
  }
}
export default Grids;
