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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import NewTask from './NewTask';

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#9c9c9c',
    secondary: {
        main: "#6a7ecc",
      },
    }
  }
});

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
  textField: {
    flexBasis: 200,
  },
  PaperT: {
    marginLeft:2,
    marginRight:2
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
          timeInit: '95:32',
          timeElap: '0',
          active: true,
          finished: false,
          deathDt:'2019-03-15'
        },
        {
          title:'Craftear LapBag',
          desc: 'Coser telas de pantalones rotos para crear mochila/bolsa para cargar Laptop',
          timeInit: '60:00',
          timeElap: '0',
          active: false,
          finished: false,
          deathDt:''
        },
        {
          title:'Modificar hilo',
          desc: 'Optimizar función que crea subThread para que pueda ser detenido a merced',
          timeInit: '22:11',
          timeElap: '0',
          active: false,
          finished: false,
          deathDt:'2019-03-17'
        },
        {
          title:'Diseñar SlimeBoard',
          desc: 'Plasmar ideas de posible pizarrón "relleno" de slime fosforescente',
          timeInit: '1:17',
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
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  removeTask(index) {
    if(window.confirm('¿Desea borrar esta tarea?')){
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index
        })
      });
    }
  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value , name);
    this.setState({
      [name]: value
    });
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleEditable = () => {
    this.setState({ readable: !(this.state.readable)});
  };




  render(){
    const { expanded } = this.state;

    return (
      <Grid item>
        <Toolbar>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <Typography variant='h6'>Tareas {this.state.tasks.length}</Typography>
            </Grid >
            <Grid item>
              <Tooltip TransitionComponent={Zoom} title='Filtrar'>
                <MuiThemeProvider theme={innerTheme}>
                  <IconButton color='primary'><FilterListIcon fontSize='small' /></IconButton>
                </MuiThemeProvider>
              </Tooltip>
            </Grid >
          </Grid>
        </Toolbar>
        <Grid container spacing={16}>
          {this.state.tasks.map((task, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
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
                        margin='dense' rowsMax="10" fullWidth value={task.desc}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <SubtitlesOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                              </InputAdornment>),
                            readOnly: this.state.readable,
                        }}/>
                      </Grid>
                      <Grid item>
                        <TextField label='Duración' variant='outlined'
                        margin='dense' fullWidth type='button'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <WatchLaterOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                                &nbsp;&nbsp;Tiempo:&nbsp;{task.timeInit}
                              </InputAdornment>),
                            readOnly: this.state.readable,
                        }}/>

                        <TextField id='taskActive0' label='Estado' variant='outlined'
                        margin='dense' fullWidth type='button'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PlaylistPlayRoundedIcon color={task.active ? ('secondary') : ('error')}/>
                                <IconButton color='error'><StopOutlinedIcon /></IconButton>
                                <IconButton color='error'><PauseIcon /></IconButton>
                                <IconButton color='error'><PlayArrowOutlinedIcon /></IconButton>
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
            </Grid>
          ))}
        </Grid>

        <Divider />

        <Button size='small'><EditIcon/>Nueva tarea</Button>
        <NewTask onAddTask={this.handleAddTask}/>

      </Grid>
    );
  }
}
export default TasksViewer;
