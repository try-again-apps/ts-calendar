import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Calendar from './Calendar';
import CategoryDialog from './CategoryDialog';

const paperStyle = {
  padding: 16
};

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Paper elevation={16} style={paperStyle}>
            <Route path="/:year?" component={Navbar} />
          </Paper>
          <Paper elevation={16} style={paperStyle}>
            <Route path="/:year?" component={Calendar} />
          </Paper>
          <CategoryDialog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
