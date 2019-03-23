import React from 'react'
import './Search.css'
import ResultList from './Result'
import Detail from './Detail'

const API_URL = 'https://api.publicapis.org';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            searchText: ''
        };
    }
    // apply filter settings
    buildQueryUrl(host, path, filter) {
        let url = `${host}/${path}`;
        url += `?https=${filter.https}`;
        if (filter.cors) url += '&cors=yes';
        if (filter.authentication !== 'none') url += `&auth=${filter.authentication}`;
        if (filter.category) url += `&category=${filter.category}`;
        console.info(`Requesting against "${url}"`);
        return url;
    }
    async getListOfAPI(filter, text) {
        // HTTP request to get json list
        let res = await fetch(this.buildQueryUrl(API_URL, 'entries', filter))
        let json = await res.json()
        // filter here
        let resultList = this.filterResults(json.entries, text)
        this.setState({ results: resultList });
    }
    filterResults(results, text) {
        let p = new RegExp(text, 'gi');
        return results.filter(result => (result['API'] && result['API'].match(p))
            || (result['description'] && result['description'].match(p)));
    }
    render() {
        return (
            <div id="search" className="v-pane">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-text">Enter Text</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Type phrases to match title or description" id="search-text"
                        onChange={event => this.setState({ searchText: event.target.value })}></input>
                    <button type="button" className="btn btn-primary" onClick={() => this.getListOfAPI(this.props.search, this.state.searchText)}>Search</button>
                </div>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}
export default Search;