import ResultList from '.Result'

const Search = (props) => (
    <div id="search" className="v-pane">
        <div class="input-group-prepend">
            <span class="input-group-text" id="search-text">Search</span>
        </div>
        <input type="text" class="form-control" placeholder="Type phrases to match title or description" id="search-text"></input>
        <ResultList />
    </div>
);

export default Search;