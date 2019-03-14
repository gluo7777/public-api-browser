import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <WidgetPane />
          <SearchPane />
        </div>
        <DetailsPane />
      </div>
    );
  }
}

export default App;
