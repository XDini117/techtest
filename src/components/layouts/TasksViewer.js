import React from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//Intentar si mejora con xs=auto

const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 1)',
    }
  }
});

const ranges = [
  {
    value: '30',
    label: 'Corta: 30 min o menos',
  },
  {
    value: '60',
    label: 'Media: 30 min a 1 hr',
  },
  {
    value: '120',
    label: 'Larga: más de 1 hr',
  },
  {
    value: 'custom',
    label: 'Definir',
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
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title:"Reservar vuelos",
          desc: "Cotizar en distintas aerolíneas y considerar beneficios (por membresías) a largo plazo",
          life: "95:32",
          active: "false",
          died:"2019-03-15"
        },
        {
          title:"Craftear LapBag",
          desc: "Coser telas de pantalones rotos para crear mochila/bolsa para cargar Laptop",
          life: "60:00",
          active: "false",
          died:""
        },
        {
          title:"Modificar hilo",
          desc: "Optimizar función que crea subThread para que pueda ser detenido a merced",
          life: "22:11",
          active: "false",
          died:"2019-03-17"
        },
        {
          title:"Diseñar SlimeBoard",
          desc: "Plasmar ideas de posible pizarrón 'relleno' de slime fosforescente",
          life: "1:17",
          active: "false",
          died:"2019-03-19"
        }
      ],
      expanded: null
    };
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

  handleChangeLife = (event, evalue) => {

    console.log("Resultado: ");
  }

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

        <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
          <Paper elevation={2} style={style.PaperT}>
            <ExpansionPanel expanded onChange={this.handleChange('task0')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid item xs={12}>
                    <TextField id="taskTitle0" label="Tarea" value={this.state.tasks[0].title} variant="outlined" margin="dense"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AssignmentOutlinedIcon color="secondary"/>
                        </InputAdornment>
                      )
                    }}/>
                </Grid>
              </ExpansionPanelSummary>

              <Divider />

              <ExpansionPanelDetails >
                <Grid container direction="column" justify="space-around" alignItems="stretch">
                  <Grid item>
                    <TextField id="taskDesc0" multiline label="Descripción" variant="outlined" rows="2" rowsMax="3"
                    value={this.state.tasks[0].desc} margin="dense" fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SubtitlesOutlinedIcon color="secondary"/>
                        </InputAdornment>
                      )
                    }}/>
                  </Grid>
                  <Grid item>
                    <TextField id="taskLife0" select label="Duración" variant="outlined" margin="dense"
                    value={this.state.tasks[0].life}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">
                          <WatchLaterOutlinedIcon color="secondary"/>
                        </InputAdornment>
                    }}>
                      {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}
                        onClick= {event => this.handleChangeLife(event, option.value)}>
                        {option.label}
                      </MenuItem>
                      ))}
                      </TextField>

                      <TextField id="taskActive0" label="Activa" variant="outlined"
                      margin="dense" fullWidth multiline
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HistoryRoundedIcon color="secondary"/>
                          </InputAdornment>
                        )
                      }}>
                        <Button variant="outlined" size="small"><DeleteOutlinedIcon/></Button>
                      </TextField>

                      <FormControlLabel control={
                      <Checkbox onChange={this.handleCheck('taskActive')}
                      value="checkedA" color="error"/>}
                      label="Iniciar tarea después de guardar"
                      />
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>

                <Divider />

                <ExpansionPanelActions>
                <Button variant="outlined" size="small"><DeleteOutlinedIcon/></Button>
                <Button variant="outlined" size="small" ><SaveOutlinedIcon/></Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            </Paper>
        </Grid>

          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
          <Paper elevation={2} style={style.PaperT}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>


              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
<Grid container  alignItems='center' justify='space-between'>
              <Grid item>
                  <ListItemIcon>
                    <AssignmentOutlinedIcon color='secondary'/> <ListItemText inset primary='Tarea 117' />
                  </ListItemIcon>
                </Grid>
                <Grid item>
                  <Typography variant='caption' >Duración: 15:32</Typography>
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
  direction='column'
  justify='space-around'
  alignItems='stretch'
>
              <Grid item >

              <TextField
          select
          label='Duración'
          variant='outlined'
fullWidth
          value={this.state.weightRange}
          InputProps={{
            startAdornment: <InputAdornment position='end'>mm:ss</InputAdornment>,
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
        label='Descripción'
          variant='outlined'
        rowsMax='3'
        placeholder='Describe la tarea'


      />

                      </Grid>

                  </Grid>
                  </MuiThemeProvider>
                </ExpansionPanelDetails>

                <Divider />


                <ExpansionPanelActions>
                  <Button variant='outlined' size='small'><DeleteOutlinedIcon/></Button>
                  <Button variant='outlined' size='small' ><SaveOutlinedIcon/>Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
              </Paper>
          </Grid>

          <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div style={style.column}>
          <ListItemIcon>
            <AssignmentOutlinedIcon /> <ListItemText inset primary='Tarea 150' />
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
            <Typography variant='caption'>
              Select your destination of choice
              <br />
              <a href='#sub-labels-and-columns' style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Cancel</Button>
          <Button size='small' color='primary'>
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
            <AssignmentOutlinedIcon/> <ListItemText inset primary='Tarea 142' />
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

            <Typography variant='caption'>
              Select your destination of choice
              <br />
              <a href='#sub-labels-and-columns' style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Cancel</Button>
          <Button size='small' color='primary'>
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
            <AssignmentOutlinedIcon /> <ListItemText inset primary='Tarea Daniel' />
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

            <Typography variant='caption'>
              Select your destination of choice
              <br />
              <a href='#sub-labels-and-columns' style={style.link}>
                Learn more
              </a>
            </Typography>
            </div>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Cancel</Button>
          <Button size='small' color='primary'>
            Save
          </Button>
        </ExpansionPanelActions>
            </ExpansionPanel>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={tam.xs} sm={tam.sm} md={tam.md} lg={tam.lg} xl={tam.xl}>
          <Paper elevation={2} style={style.PaperT}>
            <ExpansionPanel expanded onChange={this.handleChange('tnueva')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid item xs={12}>
                    <TextField id='taskTitle' label='Tarea' placeholder='¿Qué hay que hacer?' variant='outlined' margin='dense'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AssignmentOutlinedIcon color='error'/>
                        </InputAdornment>
                      )
                    }}/>
                </Grid>
              </ExpansionPanelSummary>

              <Divider />

              <ExpansionPanelDetails >
                <Grid container direction='column' justify='space-around' alignItems='stretch'>
                  <Grid item>
                    <TextField id='taskDesc' multiline label='Descripción' variant='outlined' rows='2' rowsMax='3'
                    placeholder='Describe la tarea' margin='dense' fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SubtitlesOutlinedIcon color='error'/>
                        </InputAdornment>
                      )
                    }}/>
                  </Grid>
                  <Grid item>
                    <TextField id='taskLife' select label='Duración' variant='outlined' margin='dense'
                     helperText='Hola'
                    InputProps={{
                      startAdornment:
                        <InputAdornment position='start'>
                          <WatchLaterOutlinedIcon color='error'/>
                        </InputAdornment>
                    }}>
                      {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}
                        onClick= {event => this.handleChangeLife(event, option.value)}>
                        {option.label}
                      </MenuItem>
                      ))}
                      </TextField>

                      <FormControlLabel control={
                      <Checkbox onChange={this.handleCheck('taskActive')}
                      value='checkedA' color='error'/>}
                      label='Iniciar tarea después de guardar'
                      />
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>

                <Divider />

                <ExpansionPanelActions>
                <Button variant='outlined' size='small'><DeleteOutlinedIcon/></Button>
                <Button variant='outlined' size='small' ><SaveOutlinedIcon/></Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default TasksViewer;
