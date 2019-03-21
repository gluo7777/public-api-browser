import React from 'react'
import './Search.css'
import ResultList from './Result'
import Detail from './Detail'

const API_URL = 'https://api.publicapis.org';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null
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
    async getListOfAPI(filter) {
        // HTTP request to get json list
        let res = await fetch(this.buildQueryUrl(API_URL, 'entries', filter))
        let json = await res.json()
        this.setState({ results: json.entries });
    }
    render() {
        return (
            <div id="search" className="v-pane">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-text">Enter Text</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Type phrases to match title or description" id="search-text"></input>
                    <button type="button" className="btn btn-primary" onClick={() => this.getListOfAPI(this.props.search)}>Search</button>
                </div>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}
export default Search;