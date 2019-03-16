import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Control from './components/Control'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        http: false,
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
          http: filter.http ? filter.http : state.search.http,
          cors: filter.cors ? filter.cors : state.search.cors,
          authentication: filter.authentication ? filter.authentication : state.search.authentication,
          category: filter.category ? filter.category : state.search.category
        }
      }
    }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Search search={this.state.search} />
        <Control onFiltersChange={this.updateSearchFilters} />
      </React.Fragment>
    );
  }
}

export default App;
