import React, { Component } from 'react';
import {Header, Grids} from './components/layouts';

class App extends Component {
  render() {
    return (
      <div>
        <Header time="15:32"/>
        <Grids/>
      </div>
    );
  }
}

export default App;
