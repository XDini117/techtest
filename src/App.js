import React, { Component } from 'react';
import {Header, Grids} from './components/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({ //https://material-ui.com/customization/default-theme/?expend-path=$.palette
  palette: {
    common:{
      black: "#000",
      white: "#fff"
    },
    background:{
      paper: "#545454"
    },
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#1dc85a",
    },
    error: {
      main: "#1188d6",
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
