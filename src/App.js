import React, { Component } from 'react';
import {Header, Grids} from './components/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {

    background:{
      paper: "#22293f"
    },
    primary: {
      main: "#22293f",
    },
    secondary: {
      main: "#6a7ecc",
    },
    error: {
      main: "#343e62",
    },
    text:{
      primary:"#fff",
      secondary:"rgba(250, 250, 250, 0.54)",
    }
  }
});

class App extends Component {

  render() {

    return (
      <div>
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Grids/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
