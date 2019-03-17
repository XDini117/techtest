import React, {Component} from 'react';
import {Grid, Paper, Divider, List, MenuList, MenuItem, Typography, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import Right from './Right';

const style = {
  Paper: {padding : 10, margin:10, height: '80vh' }
}

class Grids extends Component {
  render(){
    return(
      <Grid container justify="flex-start" alignItems="stretch" spacing={16}>
        <Grid item xs={3}>
          <Paper style={style.Paper}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon><AssignmentIcon/></ListItemIcon>
                  <Typography variant="inherit" noWrap>Tareas</Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><TrendingUpIcon/></ListItemIcon>
                  <Typography variant="inherit" noWrap>Gráfica</Typography>
                </MenuItem>
              </MenuList>
              <Divider/>
              <List>
                <ListItem>
                <ListItemText primary="About" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper style={style.Paper}>
              <Right/>
            </Paper>
          </Grid>
        </Grid>
    )
  }
}
export default Grids;
