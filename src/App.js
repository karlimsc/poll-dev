import React, {Component} from 'react';

import { Home } from './pages/Home.js'
import {MainPage} from './pages/MainPage.js'
import { NotFound } from './pages/NotFound.js'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Home/>
      </div>
    );
  }
}

export default App;
