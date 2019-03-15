import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Control from './components/Control'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Control />
      </React.Fragment>
    );
  }
}

export default App;
