import React from 'react';
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

class TasksViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title:'Reservar vuelos',
          desc: 'Cotizar en distintas aerolíneas y considerar beneficios (por membresías) a largo plazo',
          life: '95:32',
          active: true,
          died:'2019-03-15'
        },
        {
          title:'Craftear LapBag',
          desc: 'Coser telas de pantalones rotos para crear mochila/bolsa para cargar Laptop',
          life: '60:00',
          active: false,
          died:''
        },
        {
          title:'Modificar hilo',
          desc: 'Optimizar función que crea subThread para que pueda ser detenido a merced',
          life: '22:11',
          active: false,
          died:'2019-03-17'
        },
        {
          title:'Diseñar SlimeBoard',
          desc: 'Plasmar ideas de posible pizarrón "relleno" de slime fosforescente',
          life: '1:17',
          active: false,
          died:'2019-03-19'
        }
      ],
      expanded: null,
      open: false,
      dswitch: true,
      edit:false,
      defaultDate: new Date(1970,1,1,0), // the same, hours etc are 0 by default
    };
  }

  printSth = (event, evalue) => {
    console.log(this.state.defaultDate);
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleCheck = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleSwitch = event => {
    this.setState({ dswitch: event.target.checked});
  };

  handleChangeLife = (event, evalue) => {
    console.log('Resultado: ');
  }

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
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
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <Typography variant='h6'>Tareas</Typography>
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
            <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
              <Paper elevation={2} style={style.PaperT}>
                <ExpansionPanel expanded={expanded === i} onChange={this.handleChange(i)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid item xs={12}>
                      <TextField label='Tarea' value={task.title} variant='outlined' margin='dense'
                      InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <AssignmentOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                            </InputAdornment>
                          )
                      }}/>
                    </Grid>
                  </ExpansionPanelSummary>

                  <Divider />

                  <ExpansionPanelDetails>
                    <Grid container direction='column' justify='space-around' alignItems='stretch'>
                      <Grid item>
                        <TextField multiline label='Descripción' variant='outlined'
                        value={task.desc} margin='dense' fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <SubtitlesOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                              </InputAdornment>
                            )
                        }}/>
                      </Grid>
                      <Grid item>
                        <TextField label='Duración' variant='outlined'
                        margin='dense' fullWidth type='button' onClick={this.handleDialogOpen}
                        InputProps={{
                            startAdornment:
                              <InputAdornment position='start'>
                                <WatchLaterOutlinedIcon color={task.active ? ('secondary') : ('error')}/>
                                &nbsp;&nbsp;Tiempo:&nbsp;{task.life}
                              </InputAdornment>
                        }}/>
                        <Dialog open={this.state.open} onClose={this.handleDialogClose}>
                          <DialogTitle>"Duración estimada"</DialogTitle>
                          <Divider/>
                          <DialogContent>
                            <FormControlLabel control={
                              <Switch checked={this.state.dswitch} onChange={this.handleSwitch}
                              />}label="Duración predeterminada"/>
                            <RadioGroup value={this.state.value}>
                              <FormControlLabel disabled={!(this.state.dswitch)} value="30" control={<Radio />} label="Corta: 30 min o menos" />
                              <FormControlLabel disabled={!(this.state.dswitch)} value="60" control={<Radio />} label="Media: 30 min a 1 hr" />
                              <FormControlLabel disabled={!(this.state.dswitch)} value="2" control={<Radio />} label="Larga: más de 1 hr" />
                            </RadioGroup>
                            <DialogContentText>
                            Definir duración en minutos y segundos (Max dos horas).
                            </DialogContentText>
                          </DialogContent>
                          <Divider/>
                          <DialogActions>
                            <Button onClick={this.handleDialogClose} color="secondary">Cancelar</Button>
                            <Button onClick={this.printSth} color="secondary" autoFocus>Guardar</Button>
                          </DialogActions>
                        </Dialog>
                        <TextField id='taskActive0' label='Estado' variant='outlined'
                        margin='dense' fullWidth type='button'
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PlaylistPlayRoundedIcon color={task.active ? ('secondary') : ('error')}/>
                                <IconButton color='error'><StopOutlinedIcon /></IconButton>
                                <IconButton color='error'><PauseIcon /></IconButton>
                                <IconButton color='error'><PlayArrowOutlinedIcon /></IconButton>
                              </InputAdornment>
                            )
                        }}/>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                  <Divider />
                  <ExpansionPanelActions>
                    <Grid container direction="row"  justify="space-between" alignItems="center">
                      <Grid item>
                        <Button size='small'><DeleteIcon/></Button>
                      </Grid>
                      <Grid item>
                        <Button size='small'><EditIcon/></Button>
                        <Button size='small' ><SaveIcon/></Button>
                      </Grid>
                    </Grid>
                  </ExpansionPanelActions>
                </ExpansionPanel>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider />

        <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
          <Paper elevation={2} style={style.PaperT}>
          <ExpansionPanel expanded onChange={this.handleChange('newTask')}>
              <ExpansionPanelDetails>
                <Grid item xs={12}>
                    <TextField label='Tarea' placeholder='¿Qué hay que hacer?' variant='outlined' margin='dense' fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AssignmentOutlinedIcon />
                        </InputAdornment>
                      )
                    }}/>
                </Grid>
              </ExpansionPanelDetails>

              <Divider />
<ExpansionPanelDetails >
              <Grid container direction='column' justify='space-around' alignItems='stretch'>
                <Grid item>
                  <TextField multiline label='Descripción' variant='outlined'
                  value={this.state.tasks[0].desc} margin='dense' fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SubtitlesOutlinedIcon color='secondary'/>
                      </InputAdornment>
                    )
                  }}/>
                </Grid>
                <Grid item>
                  <TextField label='Duración' variant='outlined'
                  margin='dense' fullWidth type='button' onClick={this.handleDialogOpen}
                  InputProps={{
                    startAdornment:
                      <InputAdornment position='start'>
                        <WatchLaterOutlinedIcon color='secondary'/>
                        &nbsp;&nbsp;Tiempo:&nbsp;{this.state.tasks[0].life}
                      </InputAdornment>
                  }}>
                    </TextField>

                    <Dialog open={this.state.open} onClose={this.handleDialogClose}>
                    <DialogTitle id="dialogTitle">{"Duración estimada"}</DialogTitle>
                    <Divider/>
                    <DialogContent>
                    <FormControlLabel
                    control={
                      <Switch
                      checked={this.state.dswitch}
                      onChange={this.handleSwitch}
                    />}label="Duración predeterminada"/>
                    <RadioGroup name="duration0" value={this.state.value} >
          <FormControlLabel disabled={!(this.state.dswitch)} value="30" control={<Radio />} label="Corta: 30 min o menos" />
          <FormControlLabel disabled={!(this.state.dswitch)} value="60" control={<Radio />} label="Media: 30 min a 1 hr" />
          <FormControlLabel disabled={!(this.state.dswitch)} value="2" control={<Radio />} label="Larga: más de 1 hr" />
        </RadioGroup>
        <DialogContentText>
        Definir duración en minutos y segundos (Max dos horas).


          </DialogContentText>



                    </DialogContent>
                    <Divider/>
                    <DialogActions>
                    <Button onClick={this.handleDialogClose} color="secondary">Cancelar</Button>
                    <Button onClick={this.printSth} color="secondary" autoFocus>Guardar</Button>
        </DialogActions>
      </Dialog>
                  <Grid item>


                      <FormControlLabel control={
                      <Checkbox onChange={this.handleCheck('taskActive')}
                      value='checkedA' color='error'/>}
                      label='Iniciar tarea después de guardar'
                      />
                    </Grid>
</Grid>

                </Grid>
                </ExpansionPanelDetails>

                <Divider />

                <ExpansionPanelActions>
                <Button size='small'><DeleteIcon/></Button>
                <Button size='small' ><SaveIcon/></Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default TasksViewer;
