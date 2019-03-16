import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Control from './components/Control'

class App extends Component {
  constructor(props){
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

  updateSearchFilters(filter){
    this.setState({
      search: {
        http: filter.http,
        cors: filter.cors,
        authentication: filter.authentication,
        category: filter.category
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Search search={this.state.search}/>
        <Control onFiltersChange={this.updateSearchFilters}/>
      </React.Fragment>
    );
  }
}

export default App;
