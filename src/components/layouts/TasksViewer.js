import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
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

import SubtitlesOutlinedIcon from '@material-ui/icons/SubtitlesOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import PauseIcon from '@material-ui/icons/Pause';
import HistoryIcon from '@material-ui/icons/History';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import TimerIcon from '@material-ui/icons/Timer';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Snackbar from '@material-ui/core/Snackbar';

import NewTask from './NewTask';

const pTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6e768d",
    },
    secondary: {
      main: "#6a7ecc",
    },
    error: {
      main: "#445081",
    },
    background:{
      paper: "#1d2336"
    },
    text:{
        primary:"#fff",
        secondary:"#6e768d"
      },
    divider: "#161b2a",
  }
});

const style = {
  PaperT: {
    marginTop: 2,
    marginBottom: 8,
    marginLeft: 2,
    marginRight: 8,
  }
}

class TasksViewer extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title:'Reservar vuelos',
          desc: 'Cotizar en distintas aerolíneas y considerar beneficios (por membresías) a largo plazo',
          timeInit: '7042',
          timeElap: '1812',
          active: true,
          finished: false,
          deathDt:'2019-03-15'
        },
        {
          title:'Craftear LapBag',
          desc: 'Coser telas de pantalones rotos para crear mochila/bolsa para cargar Laptop',
          timeInit: '3600',
          timeElap: '1818',
          active: false,
          finished: false,
          deathDt:''
        },
        {
          title:'Modificar hilo',
          desc: 'Optimizar función que crea subThread para que pueda ser detenido a merced',
          timeInit: '1331',
          timeElap: '1122',
          active: false,
          finished: false,
          deathDt:'2019-03-17'
        },
        {
          title:'Diseñar SlimeBoard',
          desc: 'Plasmar ideas de posible pizarrón "relleno" de slime fosforescente',
          timeInit: '77',
          timeElap: '0',
          active: false,
          finished: false,
          deathDt:'2019-03-19'
        }
      ],
      expanded: null,
      open: false,
      readable: true,
      defaultDate: new Date(1970,1,1,0), // the same, hours etc are 0 by default
      vertical: 'top',
    horizontal: 'center',
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  stopTask = i => {
    this.resetTaskElap(i);
    this.pauseTask(i);
  };

  pauseTask = i => {
    this.setState(state => {
      const tasks = state.tasks.map((task, j) => {
        if (j === i) {
          return {...task, active: false};
        } else {
          return task;
        }
      });

      return {
       tasks,
      };
    });
  };

  playTask = i => {
    this.setState(state => {
      const tasks = state.tasks.map((task, j) => {
        if (j === i) {
          return {...task, active: true};
        } else {
          return {...task, active: false};
        }
      });

      return {
       tasks,
      };
    });
  };

  finishTask = i => {
    this.setState(state => {
      const tasks = state.tasks.map((task, j) => {
        if (j === i) {
          return {...task, finished: true};
        } else {
          return task;
        }
      });

      return {
       tasks,
      };
    });
  };

  resetTaskElap = i => {
    this.setState(state => {
      const tasks = state.tasks.map((task, j) => {
        if (j === i) {
          return {...task, timeElap: '0'};
        } else {
          return task;
        }
      });

      return {
       tasks,
      };
    });
  };

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask(index) {
    if(window.confirm('¿Desea borrar la tarea ' + this.state.tasks[index].title + '?')){
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index
        })
      });
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleEditable = () => {
    this.setState({ readable: !(this.state.readable)});
  };

  renderTimeInit(time){
    if (time === '') {
      return ('Min: 0 Seg: 0');
    } else {
      return ('Min: ' + parseInt(time/60) + ' Seg: ' +  (time - parseInt(time/60) * 60));
    }
  };

  render(){
    const { expanded } = this.state;
    const { vertical, horizontal } = this.state;
    return (
      <Grid item>
        <Toolbar>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <Typography variant='h6'>Tareas: {this.state.tasks.length}</Typography>
            </Grid >
            <Grid item>
              <Tooltip TransitionComponent={Zoom} title='Filtrar'>
                  <IconButton color='textSecondary'><FilterListIcon fontSize='small' /></IconButton>
              </Tooltip>
            </Grid >
          </Grid>
        </Toolbar>
        <Grid container>
          {this.state.tasks.map((task, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <MuiThemeProvider theme={pTheme}>
              <Paper elevation={2} style={style.PaperT}>
                <ExpansionPanel expanded={expanded === i} onChange={this.handleChange(i)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid item xs={12}>
                      <TextField name='title' label='Título' variant='outlined' margin='dense'
                      fullWidth value={task.title}
                      InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <AssignmentOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                            </InputAdornment>
                          ),
                          readOnly: this.state.readable,
                      }}/>
                    </Grid>
                  </ExpansionPanelSummary>

                  <Divider />

                  <ExpansionPanelDetails>
                    <Grid container direction='column' justify='space-around' alignItems='stretch'>
                      <Grid item>
                        <TextField multiline name='desc' label='Descripción' variant='outlined'
                        margin='dense' rows={4} fullWidth value={task.desc}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <SubtitlesOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                              </InputAdornment>),
                            readOnly: this.state.readable,
                        }}/>
                      </Grid>
                      <Grid item>
                        <TextField name='timeInit' label='Duración' variant='outlined'
                        margin='dense' fullWidth
                        value={this.renderTimeInit(task.timeInit)}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <WatchLaterOutlinedIcon color={task.active ?  ('secondary') : ('error')}/>
                              </InputAdornment>),
                            readOnly: this.state.readable,
                        }}/>

                        <TextField name='timeElap' label='Temporizador' variant='outlined'
                        margin='dense' fullWidth
                        value={this.renderTimeInit(task.timeInit - task.timeElap)}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <TimerIcon color={task.active ?  ('secondary') : ('error')}/>
                              </InputAdornment>),
                            readOnly: this.state.readable,
                        }}/>

                        <TextField name='taskActive' label='Estado' variant='outlined'
                        margin='dense' fullWidth type='button'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PlaylistPlayRoundedIcon color={task.active ? ('secondary') : ('error')}/>
                                <Tooltip title='Detener'>
                                <IconButton disabled={!task.active} color='primary' onClick={() => this.stopTask(i)}><StopOutlinedIcon /></IconButton>
                                </Tooltip>
                                {!task.active &&
                                <Tooltip title='Reproducir'>
                                <IconButton color='primary' onClick={() => this.playTask(i)}> <PlayArrowOutlinedIcon /></IconButton>
                                </Tooltip>}
                                {task.active &&
                                <Tooltip title='Pausar'>
                                <IconButton color='primary' onClick={() => this.pauseTask(i)}><PauseIcon /></IconButton>
                                </Tooltip>}
                                <Tooltip title='Reiniciar'>
                                <IconButton color='primary' onClick={() => this.resetTaskElap(i)}><HistoryIcon /></IconButton>
                                </Tooltip>
                                <Tooltip title='Terminar'>
                                <IconButton color='primary' onClick={() => this.finishTask(i)}><DoneOutlinedIcon /></IconButton>
                                </Tooltip>
                              </InputAdornment>),
                            readOnly: this.state.readable
                        }}/>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Grid container direction="row"  justify="space-between" alignItems="center">
                      <Grid item>
                        <Button size='small' onClick={this.removeTask.bind(this, i)}><DeleteIcon/></Button>
                      </Grid>
                      <Grid item>
                      </Grid>
                    </Grid>
                  </ExpansionPanelActions>
                </ExpansionPanel>
              </Paper>
                </MuiThemeProvider>
            </Grid>
          ))}
        </Grid>

        <Divider />

        <NewTask onAddTask={this.handleAddTask}/>

      </Grid>
    );
  }
}
export default TasksViewer;
