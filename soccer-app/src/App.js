import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Button variant="contained" color="primary">Okay!</Button>
      </MuiThemeProvider>
    );
  }
}

export default App;
