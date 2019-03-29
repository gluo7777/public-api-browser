import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Control from './components/Control'

class App extends Component {
  constructor(props) {
    super(props);
    // global state
    // should be passed down to all components under App
    this.state = {
      search: {
        https: true,
        cors: false,
        authentication: 'none',
        category: ''
      },
      setting: {}
    };
    // bind callbacks to App context
    this.updateSearchFilters = this.updateSearchFilters.bind(this);
  }

  updateSearchFilters(field, value) {
    this.setState((state) => {
      state.search[field] = value;
      return state;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Search search={this.state.search} />
        <Control onFiltersUpdated={this.updateSearchFilters} />
      </React.Fragment>
    );
  }
}

export default App;
