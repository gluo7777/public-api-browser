import React from 'react'
import './Search.css'
import ResultList from './Result'
import Detail from './Detail'

const API_URL = 'https://api.publicapis.org';

const VIEW = {
    DETAIL: 'view_detail',
    LIST: 'view_list',
};

// type-ahead delay
const DELAY = 1000;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            result: null,
            searchText: '',
            mode: VIEW.LIST,
            timeout: null
        };
        this.populateList = this.populateList.bind(this);
    }
    // apply filter settings
    buildQueryUrl(host, path, filter) {
        let url = `${host}/${path}`;
        url += `?https=${filter.https}`;
        if (filter.cors) url += '&cors=yes';
        if (filter.authentication !== 'none') url += `&auth=${filter.authentication}`;
        if (filter.category) url += `&category=${filter.category}`;
        return url;
    }
    async getListOfAPI(filter, text) {
        // HTTP request to get json list
        let res = await fetch(this.buildQueryUrl(API_URL, 'entries', filter));
        let json = await res.json();
        this.setState({ results: json.entries, searchText: text });
    }
    // applies debouncing to REST calls
    populateList(event) {
        if (this.state.timeout) clearTimeout(this.state.timeout);
        const text = event.target.value;
        this.setState({
            timeout: setTimeout(() => {
                this.getListOfAPI(this.props.search, text)
            }, DELAY)
        });
    }

    render() {
        return (
            <div id="search" className="v-pane">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-text">Enter Text</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Type phrases to match title or description" id="search-text"
                        onKeyUp={this.populateList}></input>
                </div>
                {
                    // show details or list
                    this.state.mode === VIEW.LIST ?
                        <ResultList payload={this.state.results} search={this.state.searchText} onRowClicked={result => this.setState({ result: result, mode: VIEW.DETAIL })} />
                        : <Detail result={this.state.result} onBackBtnClicked={() => this.setState({ mode: VIEW.LIST, result: null })} />
                }
            </div>
        );
    }
}
export default Search;