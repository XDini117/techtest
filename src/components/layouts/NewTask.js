import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SubtitlesOutlinedIcon from '@material-ui/icons/SubtitlesOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const pTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6e768d",
    },
    secondary: {
      main: "#6a7ecc",
    },
    error: {
      main: "#343e62",
    },
    background:{
        paper: "#1d2336"
      },
    text:{
        primary:"#fff",
        secondary:"#6e768d"
      },
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

class NewTask extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      desc: '',
      timeInit: '0',
      timeElap: '0',
      active: false,
      finished: false,
      deathDt: '1995-09-06',
      open: false,
      dswitch: true,
      min: '0',
      sec: '0',
      duration: 'sh'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); //evita refrescar la screen
    this.props.onAddTask(this.state);
    this.setState({
      title: '',
      desc: '',
      timeInit: '0',
      timeElap: '0',
      active: false,
      finished: false,
      deathDt: '1995-09-06',
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleCheck = event => {
    this.setState({ active: event.target.checked});
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };



  handleSwitch = event => {
    this.setState({ dswitch: event.target.checked});
  };

  handleTimeInit = () => {
    this.setState({ timeInit: parseInt(this.state.min) * 60 + parseInt(this.state.sec)});
    this.handleDialogClose();
  };

  handleTimePred = () => {
  switch (this.state.duration) {
  case 'sh':
    this.setState({ timeInit: 1800});
    break;
  case 'md':
    this.setState({ timeInit: 3600});
    break;
  case 'lg':
      this.setState({ timeInit: 7200});
      break;
  default:
  this.setState({ timeInit: 0});
}
    this.handleDialogClose();
  };

  renderTimeInit(time){
    if (time === '') {
      return ('Min: 0 Seg: 0');
    } else {
      return ('Min: ' + parseInt(time/60) + ' Seg: ' +  (time - parseInt(time/60) * 60));
    }
  };

  handleError(min, sec) {
    var time = (parseInt(min) * 60 + parseInt(sec))
    return ((time > 7200) || (time <= 0) || (min === '') || (sec === '') || (parseInt(sec) > 59) || (parseInt(sec) < 0))
  };

  renderHelperText(min, sec){
    var time = (parseInt(min) * 60 + parseInt(sec))
    if (time > 7200) {
      return ('La duración es superior a 2 horas');
    } else if (time <= 0) {
      return ('La duración debe ser superior a 0');
    } else if (min === '') {
      return ('Ingrese minutos');
    } else {
      return ('');
    }
  };

  renderHelperTextSec(sec){
    if (sec === '') {
      return ('Ingrese segundos');
    } else if (parseInt(sec) > 59) {
      return ('Los segundos deben ser menores a 60');
    } else if (parseInt(sec) < 0) {
      return ('Los segundos no pueden ser negativos');
    } else {
      return ('');
    }
  };

  render() {

    return (

<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
<MuiThemeProvider theme={pTheme}>
  <Paper elevation={2} style={style.PaperT}>
  <ExpansionPanel expanded>
      <ExpansionPanelDetails>
        <Grid item xs={12}>
            <TextField name='title' label='Título' placeholder='¿Qué hay que hacer?' variant='outlined'
            margin='dense' fullWidth value={this.state.title} onChange={this.handleInputChange}
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
          <TextField multiline name='desc' label='Descripción' placeholder='Agrega una descripción' variant='outlined'
          margin='dense' rowsMax="10" fullWidth value={this.state.desc} onChange={this.handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SubtitlesOutlinedIcon />
              </InputAdornment>
            )
          }}/>
        </Grid>
        <Grid item>
          <TextField name='timeInit' label='Duración' variant='outlined'
          margin='dense' fullWidth value={this.renderTimeInit(this.state.timeInit)} type='button' onClick={this.handleDialogOpen}
          InputProps={{
            startAdornment:
              <InputAdornment position='start'>
                <WatchLaterOutlinedIcon/>
              </InputAdornment>
          }}/>

          <Dialog open={this.state.open} onClose={this.handleDialogClose}>
            <DialogTitle id="dialogTitle">{"Duración estimada"}</DialogTitle>
            <Divider/>
            <DialogContent>
            <FormControlLabel
            control={
              <Switch
              checked={this.state.dswitch}
              onChange={this.handleSwitch}
            />
          }label="Duración predeterminada"/>
            <RadioGroup name="duration" value={this.state.duration} onChange={this.handleInputChange}>
  <FormControlLabel disabled={!(this.state.dswitch)} value="sh" control={<Radio />} label="Corta: 30 min o menos" />
  <FormControlLabel disabled={!(this.state.dswitch)} value="md" control={<Radio />} label="Media: 30 min a 1 hr" />
  <FormControlLabel disabled={!(this.state.dswitch)} value="lg" control={<Radio />} label="Larga: más de 1 hr" />
</RadioGroup>
<Divider />
  <Typography noWrap variant={this.state.dswitch ? ('caption') : ('subheading')} >Definir duración en minutos y segundos. (máximo dos horas)</Typography>
<Grid container direction="row"  justify="space-between" alignItems="flex-start">

  <Grid item>
  <TextField
  error = {this.handleError(this.state.min, this.state.sec)}
  disabled={this.state.dswitch}
  name='min'
  label='Minutos'
  variant='outlined'
  margin='dense' fullWidth
  value={this.state.min}
  onChange={this.handleInputChange}
  type="number"
  helperText={this.renderHelperText(this.state.min, this.state.sec)}
  InputLabelProps={{
    shrink: true,
  }}
  />
  </Grid>

  <Grid item>
<TextField
error = {this.handleError(this.state.min, this.state.sec)}
disabled={this.state.dswitch}
name='sec'
label='Segundos'
variant='outlined'
margin='dense' fullWidth
value={this.state.sec}
onChange={this.handleInputChange}
type='number'
helperText={this.renderHelperTextSec(this.state.sec)}
InputLabelProps={{
  shrink: true,
}}
/>
</Grid>
</Grid>



            </DialogContent>
            <Divider/>
            <DialogActions>
            <Button onClick={this.handleDialogClose} color="secondary">Cancelar</Button>
            {!this.state.dswitch && <Button disabled = {this.handleError(this.state.min, this.state.sec)}
            onClick={this.handleTimeInit} color="secondary">Guardar</Button>}

            {this.state.dswitch && <Button onClick={this.handleTimePred} color="secondary">Guardar</Button>}
</DialogActions>
</Dialog>


          </Grid>
          <Grid item>
              <FormControlLabel control={
              <Checkbox checked={this.state.active} onChange={this.handleCheck}/>}
              label='Iniciar tarea después de guardar'
              />
        </Grid>
        </Grid>
        </ExpansionPanelDetails>

        <Divider />

        <ExpansionPanelActions>
        <Button size='small'><DeleteIcon/></Button>
        <Button size='small' onClick={this.handleSubmit}><SaveIcon/></Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
    </Paper>
      </MuiThemeProvider>
</Grid>

)
}

}

export default NewTask;
