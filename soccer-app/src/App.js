import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import './App.css';

import Player from './imports/ui/Player.js';
import TeamList from './imports/ui/Team-list.js';
import TeamStats from './imports/ui/Team-stats.js';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Soccer Application
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="row">
          <div className="col s12 m7"><Player /></div>
          <div className="col s12 m5"><TeamStats /></div>
          <div className="col s12 m5"><TeamList /></div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
