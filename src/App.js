//import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Body from './Body';


class App extends Component {
  render(){
    return(
      <Router>
        <div className="container mt-3">
          <Body />
        </div>
      </Router>
    )
  }
}

export default App;
