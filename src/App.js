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
      filter: {
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
      state.filter[field] = value;
      return state;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Search filter={this.state.filter} />
        <Control onFiltersUpdated={this.updateSearchFilters} global={this.state} />
      </React.Fragment>
    );
  }
}

export default App;
