import './Result.css'
// React requires this import
// eslint-disable-next-line no-unused-vars
import React from 'react'

const ResultList = (props) => (
    <div id="results" className="card">
        <ul className="list-group list-group-flush">
            {props.results ?
                props.results.map((result, i) =>
                    <Result key={i}
                        text={result['API']}
                        description={result['Description']}
                        category={result['Category']}
                        onRowClicked={() => props.onRowClicked(result)} />)
                : null}
        </ul>
    </div>
);

// <strong>API #1</strong> Cras <span className="highlight">justo</span> odio

const Result = (props) => (
    <li className="list-group-item">
        <div className="result h-pane" onClick={props.onRowClicked}>
            <span className="title">{props.text}</span>
            <span className="description">{props.description}</span>
            <span className="category">{props.category}</span>
        </div>
    </li>
);

export default ResultList;