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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
//Intentar si mejora con xs=auto

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 1)",
    },
  }
});

const ranges = [
  {
    value: '30',
    label: 'Corta: 30 min o menos',
  },
  {
    value: '31-60',
    label: 'Media: 30 min a 1 hr',
  },
  {
    value: '61-120',
    label: 'Larga: más de 1 hr',
  },
];

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
  textField: {
    flexBasis: 200,
  },
    PaperT: {marginLeft:2, marginRight:2}
}

class TasksViewer extends React.Component {

  state = {
    expanded: null,
    amount: '',
    weightRange: '',
  };



  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleChangeTime = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render(){
    const { expanded } = this.state;

    const tam = {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4,
      xl: 3
    };
    return (
      <Grid item>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography variant="h6">Tareas</Typography>
            </Grid >
            <Grid item>
              <Tooltip TransitionComponent={Zoom} title="Filtrar">
                <MuiThemeProvider theme={innerTheme}>
                  <IconButton color="primary"><FilterListIcon fontSize="small" /></IconButton>
                </MuiThemeProvider>
              </Tooltip>
            </Grid >
          </Grid>
        </Toolbar>
        <Grid container spacing={16}>

          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
          <Paper elevation={2} style={style.PaperT}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>


              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
<Grid container  alignItems="center" justify="space-between">
              <Grid item>
                  <ListItemIcon>
                    <AssignmentOutlinedIcon color="secondary"/> <ListItemText inset primary="Tarea 117" />
                  </ListItemIcon>
                </Grid>
                <Grid item>
                  <Typography variant="caption" >Duración: 15:32</Typography>
                  </Grid>
                  <Grid item>
                    </Grid>
                    </Grid>
              </ExpansionPanelSummary>

              <Divider />

              <ExpansionPanelDetails >
              <MuiThemeProvider theme={innerTheme}>
              <Grid
  container
  direction="column"
  justify="space-around"
  alignItems="stretch"
>
              <Grid item >

              <TextField
          select
          label="Duración"
          variant="outlined"
fullWidth
          value={this.state.weightRange}
          onChange={this.handleChangeTime('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="end">mm:ss</InputAdornment>,
          }}
        >
        {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

                    </Grid>
                    <Grid item>
                    <TextField
fullWidth
        multiline
        label="Descripción"
          variant="outlined"
        rowsMax="3"
        placeholder="Describe la tarea"


      />

                      </Grid>

                  </Grid>
                  </MuiThemeProvider>
                </ExpansionPanelDetails>

                <Divider />


                <ExpansionPanelActions>
                  <Button variant="outlined" size="small"><DeleteIcon/></Button>
                  <Button variant="outlined" size="small" ><SaveOutlinedIcon/>Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
              </Paper>
          </Grid>

          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
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
          </Grid>
          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentOutlinedIcon/> <ListItemText inset primary="Tarea 142" />
          </ListItemIcon>
          </div>
          <div style={style.column}>
            <Typography style={style.secondaryHeading}>Duración: 11:22</Typography>
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
          </Grid>
          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentOutlinedIcon /> <ListItemText inset primary="Tarea Daniel" />
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
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
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
        </Grid>
      </Grid>
    );
  }
}
export default TasksViewer;
