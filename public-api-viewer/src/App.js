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

const WidgetPane = () => (
  <div>
    <input type="checkbox" id="https"></input> HTTPS
    <input type="checkbox" id="cors"></input> CORS
    <select id="authentication">
      <option selected>None</option>
      <option>Basic</option>
      <option>apiKey</option>
      <option>OAuth</option>
    </select>
  </div>
);

const SearchPane = () => (
  <div>
    <SearchBar />
    <ResultPane />
  </div>
);

const SearchBar = () => (<div>
  <label for="search">Search</label>
  <input type="text"></input>
</div>);
const ResultPane = () => (<div></div>);

const DetailsPane = () => (<div></div>);

export default App;
