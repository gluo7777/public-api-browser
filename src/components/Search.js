import React from 'react'
import './Search.css'
import ResultList from './Result'
import Detail from './Detail'
import debounce from '../api/ComponentUtil'

const API_URL = 'https://api.publicapis.org';

const VIEW = {
    DETAIL: 'view_detail',
    LIST: 'view_list',
};

// type-ahead delay

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
    // load result list immediately
    componentDidMount() {
        this.populateList(this.props.filter, '');
    }
    // updates result list when filter settings have changed
    componentWillReceiveProps({ filter }) {
        this.populateList(filter, this.state.searchText);
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
    populateList(filter, text) {
        debounce(this, () => this.getListOfAPI(filter, text))
    }

    render() {
        return (
            <div id="search" className="v-pane">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search-text">Enter Text</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Type phrases to match title or description" id="search-text"
                        onKeyUp={event => this.populateList(this.props.filter, event.target.value)}></input>
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