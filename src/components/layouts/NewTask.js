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

class NewTask extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      desc: '',
      timeInit: '',
      timeElap: '0',
      active: false,
      finished: false,
      deathDt: '1995-09-06',
      open: false,
      dswitch: true,
      min: '0',
      sec: '0'
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
      timeInit: '',
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

  handleTimeInit = () => {
    this.setState({ timeInit: "Tiempo: " + this.state.min +":" + this.state.sec});
    this.handleDialogClose();
  };

  handleSwitch = event => {
    this.setState({ dswitch: event.target.checked});
  };

  render() {
    return (

<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
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
          margin='dense' fullWidth value={this.state.timeInit} type='button' onClick={this.handleDialogOpen}
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
            />}label="Duración predeterminada"/>
            <RadioGroup name="duration0" value={this.state.value} >
  <FormControlLabel disabled={!(this.state.dswitch)} value="30" control={<Radio />} label="Corta: 30 min o menos" />
  <FormControlLabel disabled={!(this.state.dswitch)} value="60" control={<Radio />} label="Media: 30 min a 1 hr" />
  <FormControlLabel disabled={!(this.state.dswitch)} value="2" control={<Radio />} label="Larga: más de 1 hr" />
</RadioGroup>
<DialogContentText>
Definir duración en minutos y segundos (Max dos horas).
<Grid container direction="row"  justify="space-between" alignItems="center">
  <Grid item>
  <TextField
  error = {(parseInt(this.state.min * 60) + parseInt(this.state.sec)> 7200)}
  disabled={this.state.dswitch}
  name='min'
  label='Minutos'
  variant='outlined'
  margin='dense' fullWidth
  value={this.state.min}
  onChange={this.handleInputChange}
  type="number"
  helperText={(parseInt(this.state.sec) > 59) ? ('Ingresa bien los segundos') : ('')}
  InputLabelProps={{
    shrink: true,
  }}
  />
  </Grid>

  <Grid item>


<TextField
error = {(parseInt(this.state.min * 60) + parseInt(this.state.sec) > 7200)}
disabled={this.state.dswitch}
name='sec'
label='Segundos'
variant='outlined'
margin='dense' fullWidth
value={this.state.sec}
onChange={this.handleInputChange}
type='number'
helperText={(parseInt(this.state.min * 60) + parseInt(this.state.sec) > 7200) ? ('Menor a 2 hrs...') : ('')}
InputLabelProps={{
  shrink: true,
}}
/>
</Grid>
</Grid>


  </DialogContentText>



            </DialogContent>
            <Divider/>
            <DialogActions>
            <Button onClick={this.handleDialogClose} color="secondary">Cancelar</Button>
            <Button disabled = {(
              ((parseInt(this.state.min * 60) + parseInt(this.state.sec)) > 7200) ||
              (parseInt(this.state.sec) > 59) ||
              ((parseInt(this.state.min * 60) + parseInt(this.state.sec)) <= 0)
            )}
          onClick={this.handleTimeInit} color="secondary">Guardar</Button>
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
</Grid>

)
}

}

export default NewTask;
