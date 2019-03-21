import './Result.css'
import React from 'react'

const ResultList = (props) => (
    <div id="results" className="card">
        <ul className="list-group list-group-flush">
            {props.results ?
                props.results.map((result, i) => <Result key={i} text={result['API']} />)
                : null}
        </ul>
    </div>
);

// <strong>API #1</strong> Cras <span className="highlight">justo</span> odio

const Result = (props) => (
    <li className="list-group-item">{props.text}</li>
);

export default ResultList;