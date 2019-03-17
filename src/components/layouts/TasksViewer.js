import React from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentTwoTone from '@material-ui/icons/AssignmentTwoTone';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const style = {

  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
   borderLeft: '1px solid',
   padding: '4px 8px'
 },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}

class TasksViewer extends React.Component {

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
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">Tareas</Typography>
          </Grid>
          <Grid item>
            <Tooltip TransitionComponent={Zoom} title="Filtrar">
              <IconButton><FilterListIcon/></IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentTwoTone /> <ListItemText inset primary="Tarea 117" />
          </ListItemIcon>
          </div>
          <div style={style.column}>
            <Typography style={style.secondaryHeading}>Duración: 15:32</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={style.details}>
          <div style={style.column}/>
          <div style={style.column}>
            Aquí irá un reloj
          </div>
          <div style={style.column}>
          <div style={style.helper}>

            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentOutlinedIcon /> <ListItemText inset primary="Tarea 150" />
          </ListItemIcon>
          </div>
          <div style={style.column}>
            <Typography style={style.secondaryHeading}>Duración: 07:43</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={style.details}>
          <div style={style.column}/>
          <div style={style.column}>
            Aquí irá un reloj
          </div>
          <div style={style.column}>
          <div style={style.helper}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <Divider />

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentOutlinedIcon /> <ListItemText inset primary="Tarea nueva" />
          </ListItemIcon>
          </div>
          <div style={style.column}>
            <Typography style={style.secondaryHeading}>Duración...</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={style.details}>
          <div style={style.column}/>
          <div style={style.column}>
            Aquí irá un reloj
          </div>
          <div style={style.column}>
          <div style={style.helper}>

            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>

    </Paper>
  );
}
}
export default TasksViewer;
