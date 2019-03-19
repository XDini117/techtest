import React, { Component } from 'react';
import {Header, Grids} from './components/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common:{
      black:"rgba(0, 0, 0, 1)",
      white:"rgba(255, 255, 255, 1)"
    },
    background:{
      paper: "#545454"
    },
    primary: {
      main: "rgba(0, 0, 0, 1)",
      dark:"rgba(29, 200, 90, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      main: "rgba(29, 200, 90, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    error: {
      light: "rgba(255, 255, 255, 1)",
      main: "rgba(17, 136, 214, 1)",
      dark: "rgba(255, 255, 255, 1)",
      contrastText: "#fff",
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
        <Header time="15:32"/>
        <Grids/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
