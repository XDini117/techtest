import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Header, Footer, Grids, Main} from './components/layouts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grids/>
      </div>
    );
  }
}

export default App;
