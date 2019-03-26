import React, { Component } from 'react';
import {Header, Grids} from './components/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Shapes https://material.io/design/shape/about-shape.html#components-shape
// General https://material-ui.com/customization/default-theme/?expend-path=$.palette
// bgcolor="#282c36"

const theme = createMuiTheme({
  palette: {

    background:{
      paper: "#22293f"
    },
    primary: {
      main: "#22293f",
      light: "#4b516a",
      dark: "#000019",
    },
    secondary: {
      main: "#6a7ecc",
      light: "#9cadff",
      dark: "#37529b",
    },
    error: {
      main: "#343e62",
    },
    text:{
      primary:"#fff",
      secondary:"#000",
    },
    action: {
      active: "#6e768d",
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
