import React from 'react';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentTwoTone from '@material-ui/icons/AssignmentTwoTone';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';

class FTasksViewer extends React.Component {

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

render(){

  const { expanded } = this.state;
  return (
    <Paper>
    <Toolbar>
    <Grid container direction="column" justify="flex-start" alignItems="stretch"
>
        <Grid item>
          <Typography variant="h6">Tareas Completadas</Typography>
        </Grid>
      </Grid>
    </Toolbar>
    <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={this.handleChange('panel1')}
      >
        <ExpansionPanelSummary>
        <ListItemIcon>
          <AssignmentTwoTone /> <ListItemText inset primary="Tarea 22" />
        </ListItemIcon>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel2'}
        onChange={this.handleChange('panel2')}
      >
        <ExpansionPanelSummary>
        <ListItemIcon>
          <AssignmentTwoTone /> <ListItemText inset primary="Tarea 5" />
        </ListItemIcon>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel3'}
        onChange={this.handleChange('panel3')}
      >
        <ExpansionPanelSummary>
        <ListItemIcon>
          <AssignmentTwoTone /> <ListItemText inset primary="Tarea 77" />
        </ListItemIcon>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
}
}
export default FTasksViewer;
