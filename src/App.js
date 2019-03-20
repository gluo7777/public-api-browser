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
        https: false,
        cors: false,
        authentication: 'none',
        category: ''
      },
      setting: {}
    };
    // bind callbacks to App context
    this.updateSearchFilters = this.updateSearchFilters.bind(this);
  }

  updateSearchFilters(filter) {
    this.setState((state) => {
      return {
        search: {
          https: filter.https ? filter.https : state.search.https,
          cors: filter.cors ? filter.cors : state.search.cors,
          authentication: filter.authentication ? filter.authentication : state.search.authentication,
          category: filter.category ? filter.category : state.search.category
        }
      }
    });
    // console.info(this.state);
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
