import React, {Component} from 'react';
import {Grid, Paper} from '@material-ui/core/';
import {Divider, List, ListItem} from '@material-ui/core/';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import Right from './Right'
import Footer from './Footer'



const style = {
  Paper: {padding : 20, marginTop:10, marginBottom:10 }
}


class Grids extends Component {

  render(){
    return(
      <Grid container direction="row" justify="flex-start" alignItems="stretch">
        <Grid item xs={3}>
          <Paper>
            <div>
              <List>{['Lista de tareas', 'Gráfica', ].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <AssignmentIcon /> : <TrendingUpIcon />}</ListItemIcon>
                <ListItemText primary={text} /></ListItem>
              ))}
              </List>
              <Divider />
              <List>
                <ListItem button>
                <ListItemText primary="About" />
                </ListItem>
                </List>
                <Footer/>
            </div>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={style.Paper}>

          <Right/>




          </Paper>
        </Grid>
      </Grid>
    )
  }
}
export default Grids;
