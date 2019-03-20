import React from 'react'
import './Search.css'
import ResultList from './Result'
import Detail from './Detail'

const Search = (props) => (
    <div id="search" className="v-pane">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="search-text">Enter Text</span>
            </div>
            <input type="text" className="form-control" placeholder="Type phrases to match title or description" id="search-text"></input>
            <button type="button" class="btn btn-primary">Search</button>
        </div>
        <ResultList />
        <Detail />
    </div>
);

export default Search;